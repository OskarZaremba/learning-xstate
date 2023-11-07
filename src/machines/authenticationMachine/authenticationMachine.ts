import { createMachine } from 'xstate';
import { signUpMachine } from '../signUpMachine/signUpMachine';
import { loginMachine } from '../loginMachine/loginMachine';

export const authenticationMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFmAduglgMbIED2OAssoZvjmAHQA2pUUdUAkjgMQTmM6AN1IBrRmiy4CxMpWq16zVuxxccCYaVn5yAbQAMAXUNHEoAA6lY+OeZAAPRAA4AjAYYAWAKwBmV67eBq4ATABsrmFhADQgAJ6Irj4MYSG+YQCcUQDsnga+ISEAvkWxkth4RCS68jR0jCxsHNx8Agxa4gzl0lVyVHVKjarqmjgiOvrGeq5mSCBWNnZzTghBGQy+biGeYd7ZIc7eztmxCQj+Hhm+O77ens4Fnr4ZniVlGBUy1eT9iow2UBwHAAqhZWkoOhIPj0JrU-gwAUC1KDRuNvjhTKZ7AtbDV7CsQt5XAxXNkssdvKdEABaPIMY7uDKEpJE4LZN4gbqVWG-eoI-CAkFg-gQsZiKFSbno3lKRFC1HadGYmbY6y48j4xC+XIMbxHbwZAx3NzeNJUhDUyIeTzZAwGe73AKFAolUogHCkCBwexcr59BT1VWLPHLGkBDxBO2uXzXDIZZyeDLm6nbbIMDK2+0JtyhNLFN2+3o1GUNFTNHBB9UV0MICLeEmGgwZ8JEzzR82hDypdJZMK5fKFDmFnkB2UCpFQUGVpagAnHBiEjshLtpTI5PIFfPvSV+4uj0uqADKqEIhDgsAAZqgmNOQ7PEgZDgxgt4IoFXG57SEO54QvTsj264DlunLQlK-oDP846gsep7nleN5zDiM6ODSqS6nawQxom8aJj+f7HIBfYboOrpAA */
	id: 'authenticationMachine',
	predictableActionArguments: true,
	preserveActionOrder: true,
	initial: 'signingUp',
	states: {
		loggingIn: {
			invoke: {
				src: loginMachine,
				onDone: [
					{
						target: 'loginSuccessful',
						cond: (_, event) => event.data.isLoginSuccessful,
					},
					{ target: 'signingUp' },
				],
			},
		},
		signingUp: {
			invoke: {
				src: signUpMachine,
				onDone: [
					{
						target: 'signUpSuccessful',
						cond: (_, event) => event.data.isSigningUpSuccessful,
					},
					{ target: 'loggingIn' },
				],
			},
		},
		loginSuccessful: { type: 'final' },
		signUpSuccessful: { type: 'final' },
	},
});
