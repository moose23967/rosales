import { t } from 'elysia';
import type { BaseServer } from '..';
import { rosalesOk } from '../../common/rosales-responses';

export const identifierUpdatingRoute = (baseServer: BaseServer) => {
	return baseServer.patch(
		'/identifier',
		({ query, database }) => {
			database.updateIdentifier(query.oldIdentifier, query.newIdentifier);

			return rosalesOk(undefined);
		},
		{
			query: t.Object({
				oldIdentifier: t.String(),
				newIdentifier: t.String(),
			}),
			detail: {
				summary: 'Identifier updating',
				tags: ['Tokens'],
			},
		},
	);
};
