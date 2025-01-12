import type { Command } from '../../components/command';

export const identifierUpdatingCommand: Command = {
	expression: 'update-identifier',
	options: [
		{
			expression: '--old-identifier',
			key: 'oldIdentifier',
			required: true,
		},
		{
			expression: '--new-identifier',
			key: 'newIdentifier',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const oldIdentifier = parsedOptions.oldIdentifier;
		const newIdentifier = parsedOptions.newIdentifier;

		if (!oldIdentifier || !newIdentifier) return;

		await client.identifier.patch(undefined, {
			query: { oldIdentifier, newIdentifier },
		});
	},
};
