import { FC } from 'react';

type Props = { send: any; state: any };

export const ChildMachineView1: FC<Props> = ({ send, state }) => {
	return (
		<div>
			<h2>{state.value.toString()}</h2>
			<button onClick={() => send({ type: 'GO_TO_CHILD_MACHINE_STATE2' })}>
				Go to child machine state 2
			</button>
		</div>
	);
};
