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

		await client.index.get({ query: { identifier } });
	},
};
