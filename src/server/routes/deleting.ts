import { t } from 'elysia';
import type { BaseServer } from '..';
import { rosalesOk } from '../../common/rosales-responses';

export const deletingRoute = (baseServer: BaseServer) => {
	return baseServer.delete(
		'/',
		({ query, database }) => {
			database.deleteToken(query.identifier);

			return rosalesOk();
		},
		{
			query: t.Object({
				identifier: t.String(),
			}),
			detail: {
				summary: 'Deleting',
				tags: ['Tokens'],
			},
		},
	);
};
