import { createMachine } from 'xstate';

export const signUpMachine = createMachine(
	{
		/** @xstate-layout N4IgpgJg5mDOIC5SwJZQHYFUAOBZAhgMYAWK6YAdCQPbWxi5gAux1EAxAMoCSA4gHKYACgH0AatwCCIgMIAlAKIARBfwAqUgDKcA2gAYAuolDY6KJimrpjIAB6IAzHoCMAGhABPRACYArHoo9AA4HULDwh2cAXyj3VAwcAhIySho6BmZWDklNRUklAE0RAAlJMQURSRkZAHlMdX0jJBBTVAsrG3sEABZvdy8EZ28HCgB2ADZfcb8YuLQsPCJScgpYAFcAIwBbcwt0KBkAJ0gwdAt8ABtYdggrSjIAN2oAa0p4haTlt82dpj2D44QU7nK4IR7UQj4droRqNGytcyWazNLpBPTjCgOACc6L8-R8DiCFGc41JZPJZNmIHeiSWKVWP12ZABJzOKEu1zAh0O1EOFGwFyhADNeVtVvNackVuttkz9kdWSDYGD0E9IdDYYZ4WZoZ0fFjfBRuqFfFiHKNfPjBqbiXpvEFxt1fCFwtFYtSJYspZQLtQoFBmdx0Dc7hRwa9xQkvV8KL7-YH0Cq1VCkZqmiYdUi9QhvONRsTfMNjRarViKL5RnpIjMqeg2HAbDToyltW0syjEABacZWztDALOUZY8ZBC1UpufelpeiMFhsVuIjodhBBMtBbxVoaWzw+Xrl8eeyfSxl-ZkKoFsjkL3XLqYje1bq3eZwjClvynuid0lZxgP7IPXu2oComW3TjHoZoljuCCdg43gUHmw6jr4B5RkePp+mQnBrIQhBwLAQprBcgFLsBiBgQE2K4tuAwYuum41nMaHfm8nrYbh+GEcRzQIjeZGDHa+ZgchT4OIaWIku+5IxDEQA */
		id: 'signUpMachine',
		predictableActionArguments: true,
		preserveActionOrder: true,
		initial: 'chooseMethod',
		states: {
			chooseMethod: {
				on: {
					SIGNUP_VIA_CREDENTIALS: { target: 'submittingCredentials' },
					ALREADY_HAVE_ACCOUNT: { target: 'loggingIn' },
				},
			},
			submittingCredentials: {
				invoke: {
					src: 'submitCredentials',
					onDone: { target: 'signUpSuccessful' },
					onError: { target: 'chooseMethod' },
				},
			},
			loggingIn: { type: 'final', data: { isSigningUpSuccessful: false } },
			signUpSuccessful: {
				type: 'final',
				data: { isSigningUpSuccessful: true },
			},
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
