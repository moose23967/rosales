import { Database } from 'bun:sqlite';
import {
	TokenAlreadyExists,
	TokenWasNotFoundError,
} from '../common/rosales-errors';

class Token {
	constructor(
		public identifier: string,
		public value: string,
	) {}
}

export class ExtendedDatabase extends Database {
	constructor() {
		super('.rosales.sqlite');

		this.run('CREATE TABLE IF NOT EXISTS tokens (identifier TEXT, value TEXT)');
	}

	isTokenExists(identifier: string) {
		const token = this.query('SELECT * FROM tokens WHERE identifier = ?')
			.as(Token)
			.get(identifier);

		return token !== null;
	}

	createToken(identifier: string, value: string) {
		if (this.isTokenExists(identifier)) {
			throw TokenAlreadyExists;
		}

		this.run('INSERT INTO tokens VALUES (?, ?)', [identifier, value]);
	}

	deleteToken(identifier: string) {
		if (!this.isTokenExists(identifier)) {
			throw TokenWasNotFoundError;
		}

		this.run('DELETE FROM tokens WHERE identifier = ?', [identifier]);
	}

	readToken(identifier: string) {
		const token = this.query('SELECT * FROM tokens WHERE identifier = ?')
			.as(Token)
			.get(identifier);

		if (!token) {
			throw TokenWasNotFoundError;
		}

		return token;
	}

	updateIdentifier(oldIdentifier: string, newIdentifier: string) {
		if (!this.isTokenExists(oldIdentifier)) {
			throw TokenWasNotFoundError;
		}

		if (this.isTokenExists(newIdentifier)) {
			throw TokenAlreadyExists;
		}

		this.run('UPDATE tokens SET identifier = ? WHERE identifier = ?', [
			newIdentifier,
			oldIdentifier,
		]);
	}

	updateValue(identifier: string, newValue: string) {
		if (!this.isTokenExists(identifier)) {
			throw TokenWasNotFoundError;
		}

		this.run('UPDATE tokens SET value = ? WHERE identifier = ?', [
			newValue,
			identifier,
		]);
	}
}
