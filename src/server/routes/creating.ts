import { t } from 'elysia';
import type { BaseServer } from '..';
import { rosalesOk } from '../../common/rosales-responses';

export const creatingRoute = (baseServer: BaseServer) => {
	return baseServer.post(
		'/',
		({ query, database }) => {
			database.createToken(query.identifier, query.value);

			return rosalesOk(undefined);
		},
		{
			query: t.Object({
				identifier: t.String(),
				value: t.String(),
			}),
			detail: {
				summary: 'Creating',
				tags: ['Tokens'],
			},
		},
	);
};
