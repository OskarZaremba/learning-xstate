import React, { FC } from 'react';

type Props = { send: any; state: any };

export const ParentMachineView1: FC<Props> = ({ send, state }) => {
	return (
		<div>
			<h2>{`Parent machine ${state.value.toString()} state`}</h2>
			<button onClick={() => send({ type: 'GO_TO_PARENT_MACHINE_STATE2' })}>
				Go to parent machine state 2
			</button>
		</div>
	);
};
