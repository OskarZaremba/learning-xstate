import { useMachine } from '@xstate/react';
import { becomePro } from '../../machines/becomePro/becomePro';
import { Authentication } from '../Authentication/Authentication';

export const BecomePro = (): JSX.Element => {
	const [state, send] = useMachine(becomePro);
	console.log('### co masz w state: ', state);
	switch (state.value.toString()) {
		case 'choosePlan':
			return (
				<div>
					<h2>Become Pro Machine: Choose Plan</h2>
					<p>{`Is user logged in: ${state.context.user.isLoggedIn}`}</p>
					<button onClick={() => send({ type: 'TOGGLE_LOGGED_IN' })}>
						Toggle is user logged in
					</button>
					<button onClick={() => send({ type: 'CONFIRM_PLAN' })}>
						Confirm Plan
					</button>
				</div>
			);
		case 'authenticatingUser':
			return <Authentication onboardingState={state} />;
		case 'providePaymentDetails':
			return (
				<div>
					<h2>Become Pro Machine: Provide Payment Details</h2>
				</div>
			);
		default:
			return <></>;
	}
};
