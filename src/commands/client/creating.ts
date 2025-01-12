import { deepEquals } from 'bun';
import { rosalesOk } from '../../common/rosales-responses';
import type { Command } from '../../components/command';

export const creatingCommand: Command = {
	expression: 'create',
	options: [
		{
			expression: '-i',
			key: 'identifier',
			required: true,
		},
		{
			expression: '-v',
			key: 'value',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;
		const value = parsedOptions.value;

		if (!identifier || !value) return;

		const response = await client.index.post(undefined, {
			query: {
				identifier,
				value,
			},
		});
		const responseData = response.data;

		if (!responseData) return;
		if (responseData.type !== 'ok') return;

		console.log('Created');
	},
};
