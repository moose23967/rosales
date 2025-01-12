export class RosalesError extends Error {
	code: number;

	constructor(code: number, message: string) {
		super(message);

		this.code = code;
	}
}

export const TokenWasNotFoundError = new RosalesError(
	0,
	'The token was not found',
);
export const TokenAlreadyExists = new RosalesError(
	1,
	'The token already exists',
);
export const InternalError = new RosalesError(2, 'Internal');
