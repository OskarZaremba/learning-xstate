import { useActor } from '@xstate/react';

export const SignUp = ({
	authenticationState,
}: {
	authenticationState: any;
}): JSX.Element => {
	const { signUpMachine } = authenticationState.children;
	const [state, send] = useActor(signUpMachine);

	switch ((state as any).value.toString()) {
		case 'chooseMethod':
			return (
				<div>
					<h2>Sign Up Machine: chooseMethod</h2>
					<button onClick={() => send({ type: 'SIGNUP_VIA_CREDENTIALS' })}>
						Sign Up
					</button>
					<button onClick={() => send({ type: 'ALREADY_HAVE_ACCOUNT' })}>
						Log In
					</button>
				</div>
			);
		case 'submittingCredentials':
			return (
				<div>
					<h2>Sign Up Machine: submitting sign up credentials</h2>
				</div>
			);
		default:
			return <></>;
	}
};
