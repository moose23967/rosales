import swagger from '@elysiajs/swagger';
import Elysia from 'elysia';
import { InternalError, RosalesError } from '../common/rosales-errors';
import { rosalesError } from '../common/rosales-responses';
import { ExtendedDatabase } from './extended-database';
import { creatingRoute } from './routes/creating';
import { deletingRoute } from './routes/deleting';
import { identifierUpdatingRoute } from './routes/identifier-updating';
import { readingRoute } from './routes/reading';
import { valueUpdatingRoute } from './routes/value-updating';

export const baseServer = new Elysia()
	.use(
		swagger({
			documentation: {
				info: {
					title: 'Rosales',
					version: '1.0.0',
				},
			},
			path: '/api',
		}),
	)
	.decorate('database', new ExtendedDatabase())
	.onStart(({ server }) => {
		console.log(`Started at ${server?.url}`);
	})
	.onError(({ error }) => {
		if (!(error instanceof Error)) return;

		if (!(error instanceof RosalesError)) {
			return rosalesError({
				code: InternalError.code,
				message: InternalError.message,
			});
		}

		return rosalesError({
			code: error.code,
			message: error.message,
		});
	});

export type BaseServer = typeof baseServer;

export const server = baseServer
	.use(creatingRoute)
	.use(deletingRoute)
	.use(identifierUpdatingRoute)
	.use(readingRoute)
	.use(valueUpdatingRoute);

export type Server = typeof server;
