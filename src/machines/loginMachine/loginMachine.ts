import { createMachine } from 'xstate';

export const loginMachine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5QBsD2UCWA7AsgQwGMALbMAOmNVVjBzABcjUIBiAGQHkBxASQDkA+gDUeAQQEBhAEoBRACIy+AFTFsAygG0ADAF1EoAA7UM9DKiz6QAD0QAmW1rIBmAKwBOJwDYA7LYAcAIxaWi62ADQgAJ52tk5kACwBPkGeTrEB3mkAvlkRaJi4hCRY5JTUtAxMrNIyokoyAqISEhwAqsraekggRrAmZhbdNggBAW5kbi6etvFOboFO3gHuEdEIALQBCQF+3i6BY5OjWr45eejY+MSkZLAArgBGALYmplhQEgBOkGBYpnjIWAsCDmcjYABuqAA1uR8pcijd7s9XtgPt8IL9-oCEBDUAQ8KZzJ1OpZev1zJZhksXGQpjM-LYglpPAFbN5VnZRrTglonLsWbyQt4ziA4YVriVbo8XvQ3mifn8MACgWBPp9UJ8yAZkASAGYap5kMVXYrkJEyuVfBVY2A4rCQ-GErDE3Sk4xOyl2Ly0uYheL7bx+FnhKKIUbxMjebyeLSTFxaezxIMBEXGhGSgjfAmo0QEAioO5-YGgsi4mFGi7i00ULNy3P5wv0O0O7NE3Qk7pkj1DRCeNyOPuLNKhDLeeLs0MIRxaQK2FyLNlz+LBPyLHK5EBYZhwSxpiVgN19bugYbrTwcjajWzbXauQejNzzVOVk03Mo0OiMZiH8mDE+IeIQzWRk4i0RJMgCccvFZZlnwKV9JXNFF3itDFFWVH9j2sADfASecgjcaM5k8Tw-HiC8dk8CZH3mJwdlXWMpjg+F9xrMBs3eesCz+TCBk9BBlyok43B8Gddm8LRWQvdYZgmHZMlSaZmT8YInGYqtEQwKAsFaAw1DuPM4FgXU7mQXiKR7BA3H8Mg-BcZZlwTeJJjcAJpOvEjdl2WMxniEjCPidSENhSt9MM2BjNM8y-2wqzvU8QSExCBLHycC8HHGOdglSQDQn8YV1yAA */
		id: 'loginMachine',
		context: { secretNumber: 0, secretWord: 'test' },
		initial: 'chooseMethod',
		states: {
			chooseMethod: {
				on: {
					LOGIN_VIA_CREDENTIALS: { target: 'submittingCredentials' },
					CREATE_ACCOUNT: { target: 'creatingAccount' },
				},
			},
			submittingCredentials: {
				invoke: {
					src: 'submitCredentials',
					onDone: 'loginSuccessful',
					onError: 'chooseMethod',
				},
			},
			creatingAccount: { type: 'final', data: { isLoginSuccessful: false } },
			loginSuccessful: { type: 'final', data: { isLoginSuccessful: true } },
		},
	},
	{
		services: {
			submitCredentials: async () =>
				new Promise((resolve) =>
					setTimeout(() => {
						resolve(true);
					}, 1500)
				),
		},
	}
);
