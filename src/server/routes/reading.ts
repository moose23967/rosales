import { t } from 'elysia';
import type { BaseServer } from '..';
import { rosalesOk } from '../../common/rosales-responses';

export const readingRoute = (baseServer: BaseServer) => {
	return baseServer.get(
		'/',
		({ query, database }) => {
			return rosalesOk(database.readToken(query.identifier));
		},
		{
			query: t.Object({
				identifier: t.String(),
			}),
			detail: {
				summary: 'Reading',
				tags: ['Tokens'],
			},
		},
	);
};
