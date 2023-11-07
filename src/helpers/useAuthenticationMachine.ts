import { useActor, useMachine } from '@xstate/react';
import { authenticationMachine } from '../machines/authenticationMachine/authenticationMachine';

export const useAuthenticationMachine = (onboardingState?: any) => {
	const resultState = onboardingState
		? onboardingState['becomePro.authenticatingUser:invocation[0]']
		: authenticationMachine;
	return onboardingState ? useActor(resultState) : useMachine(resultState);
};
