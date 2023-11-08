import { assign, createMachine } from 'xstate';
import { getAuthenticationMachine } from '../getAuthenticationMachine/getAuthenticationMachine';

const authenticationMachine = getAuthenticationMachine('signingUp');

export const becomePro = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QCMwGMD2BbMAFAThgHRoAWGGseANgIYB2AxAMIDyAcgGICSASgLIB9XABkAguwDaABgC6iUAAdKASwAuKjPQUgAHogCMADmlEArAYMAmIwGYAbEfsGALLdsAaEAE9EVlwDsRFbWRmFmLgCc9lYRAL5xXqiYOATEZBRUuHRMbFx8QqISkgbySCDKsOqa2uX6CMamFqEOTq7uXr4N0i5E9raB-c4BttKu9glJ6Nh4hES0AK5qpGD0Gmi0GvRQAKpU+IwQWmBEKvQAbhgA1ifJM2nzSytrKhtbu-sIZ5dvNTKy-x0lWqWh09XsjiIBnsZncZgC0MitkiLk6hmk9ihthCZiMBgCELCkUiCUSIHoGAgcB0d1ShCBqg0oLqiAAtPY0Qh2URpLy+fz+QFJiBabN0uRKDQGAyqkzaqB6i4rJzLKYkdIjC4DJEAiE3MZhaKHotlqt1pszh8wPgZSD5XpEIFerEetreZY8UYzJy8VDPRFjPD7JFpGZDdM6cRFIRzioqbhaN4cGsACJgNS0FTUeDlYFysGIExGYImAZOMwwqwBAIqyxEAlagKw0ODWGkuJAA */
	id: 'becomePro',
	predictableActionArguments: true,
	preserveActionOrder: true,
	context: { user: { isLoggedIn: false } },
	initial: 'choosePlan',
	states: {
		choosePlan: {
			on: {
				CONFIRM_PLAN: [
					{
						target: 'providePaymentDetails',
						cond: ({ user }) => user.isLoggedIn,
					},
					{ target: 'authenticatingUser' },
				],
				TOGGLE_LOGGED_IN: {
					actions: assign((context) => ({
						user: { isLoggedIn: !context.user.isLoggedIn },
					})),
				},
			},
		},
		authenticatingUser: {
			invoke: {
				src: authenticationMachine,
				onDone: { target: 'providePaymentDetails' },
			},
		},
		providePaymentDetails: {},
	},
});
