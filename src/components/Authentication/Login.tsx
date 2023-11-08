import { useActor } from '@xstate/react';

export const Login = ({
	authenticationState,
}: {
	authenticationState: any;
}): JSX.Element => {
	const { loginMachine } = authenticationState.children;
	const [state, send] = useActor(loginMachine);

	switch ((state as any).value.toString()) {
		case 'chooseMethod':
			return (
				<div>
					<h2>Login Machine: chooseMethod</h2>
					{/* <p>
						What you have in secretNumber: {(state as any).context.secretNumber}
					</p> */}
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
