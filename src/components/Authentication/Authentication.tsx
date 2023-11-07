import { useActor } from '@xstate/react';
import { Login } from './Login';
import { SignUp } from './SignUp';

export const Authentication = ({
	onboardingState,
}: {
	onboardingState: any;
}): JSX.Element => {
	const { 'becomePro.authenticatingUser:invocation[0]': becomeProMachine } =
		onboardingState.children;
	const [state] = useActor(becomeProMachine);

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
