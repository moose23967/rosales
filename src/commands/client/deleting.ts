import type { Command } from '../../components/command';

export const deletingCommand: Command = {
	expression: 'delete',
	options: [
		{
			expression: '-i',
			key: 'identifier',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;

		if (!identifier) return;

		const response = await client.index.delete(undefined, {
			query: { identifier },
		});
		const responseData = response.data;

		if (!responseData) return;
		if (responseData.type !== 'ok') return;

		console.log('Deleted');
	},
};
