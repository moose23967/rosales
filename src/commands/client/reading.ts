import type { Command } from '../../components/command';

export const readingCommand: Command = {
	expression: 'read',
	options: [
		{
			expression: '--identifier',
			key: 'identifier',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const identifier = parsedOptions.identifier;

		if (!identifier) return;

		const response = await client.index.get({ query: { identifier } });
		const responseData = response.data;

		if (!responseData) return;
		if (responseData.type !== 'ok') return;

		console.log(responseData);
	},
};
