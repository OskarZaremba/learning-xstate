import { FC } from 'react';

type Props = { send: any; state: any };

export const ParentMachineView3: FC<Props> = ({ send, state }) => {
	localStorage.setItem('testingEmail', JSON.stringify(state.context.email));
	// localStorage.setItem('testingState', JSON.stringify(state));
	return (
		<div>
			<h2>{state.value.toString()}</h2>
			<button onClick={() => send({ type: 'GO_TO_PARENT_MACHINE_STATE4' })}>
				Go to parent machine state 4
			</button>
		</div>
	);
};
