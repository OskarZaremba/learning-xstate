import { useMachine } from '@xstate/react';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { getAuthenticationMachine } from '../../machines/getAuthenticationMachine/getAuthenticationMachine';

export const Authentication2 = (): JSX.Element => {
	const authenticationMachine = getAuthenticationMachine('loggingIn');
	const [state] = useMachine(authenticationMachine);

	switch ((state as any).value.toString()) {
		case 'loggingIn':
			return <Login authenticationState={state} />;
		case 'signingUp':
			return <SignUp authenticationState={state} />;
		case 'loginSuccessful':
			return (
				<div>
					<h2>Login Successful</h2>
				</div>
			);
		case 'signUpSuccessful':
			return (
				<div>
					<h2>Sign Up Successful</h2>
				</div>
			);
		default:
			return <></>;
	}
};
