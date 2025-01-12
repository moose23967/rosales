import type { Command } from '../../components/command';

export const identifierUpdatingCommand: Command = {
	expression: 'update-identifier',
	options: [
		{
			expression: '-o',
			key: 'oldIdentifier',
			required: true,
		},
		{
			expression: '-n',
			key: 'newIdentifier',
			required: true,
		},
	],
	callback: async ({ client, parsedOptions }) => {
		if (!parsedOptions) return;

		const oldIdentifier = parsedOptions.oldIdentifier;
		const newIdentifier = parsedOptions.newIdentifier;

		if (!oldIdentifier || !newIdentifier) return;

		const response = await client.identifier.patch(undefined, {
			query: { oldIdentifier, newIdentifier },
		});
		const responseData = response.data;

		if (!responseData) return;
		if (responseData.type !== 'ok') return;

		console.log('Updated');
	},
};
