import { useActor } from '@xstate/react';

export const Login = ({
	authenticationState,
}: {
	authenticationState: any;
}): JSX.Element => {
	const { 'authenticationMachine.loggingIn:invocation[0]': signUpMachine } =
		authenticationState.children;
	const [state, send] = useActor(signUpMachine);

	switch ((state as any).value.toString()) {
		case 'chooseMethod':
			return (
				<div>
					<h2>Login Machine: chooseMethod</h2>
					<button onClick={() => send({ type: 'LOGIN_VIA_CREDENTIALS' })}>
						Login
					</button>
					<button onClick={() => send({ type: 'CREATE_ACCOUNT' })}>
						Sign Up
					</button>
				</div>
			);
		case 'submittingCredentials':
			return (
				<div>
					<h2>Login Machine: submitting login credentials</h2>
				</div>
			);
		default:
			return <></>;
	}
};
