import { t } from 'elysia';
import type { BaseServer } from '..';
import { rosalesOk } from '../../common/rosales-responses';

export const valueUpdatingRoute = (baseServer: BaseServer) => {
	return baseServer.patch(
		'/value',
		({ query, database }) => {
			database.updateValue(query.identifier, query.newValue);

			return rosalesOk();
		},
		{
			query: t.Object({
				identifier: t.String(),
				newValue: t.String(),
			}),
			detail: {
				summary: 'Value updating',
				tags: ['Tokens'],
			},
		},
	);
};
