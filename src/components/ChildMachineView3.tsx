import { FC } from 'react';

type Props = { send: any; state: any };

export const ChildMachineView3: FC<Props> = ({ state, send }) => {
	return (
		<div>
			<h2>{state.value.toString()}</h2>
			<button onClick={() => send({ type: 'OKAY' })}>
				Go back to root flow
			</button>
		</div>
	);
};
