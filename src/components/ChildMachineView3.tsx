import { FC } from 'react';

type Props = { send: any; state: any };

export const ChildMachineView3: FC<Props> = ({ state }) => {
	return (
		<div>
			<h2>{state.value.toString()}</h2>
		</div>
	);
};
