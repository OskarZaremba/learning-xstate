import { FC } from 'react';

type Props = { state: any };

export const ParentMachineView4: FC<Props> = ({ state }) => {
	return (
		<div>
			<h2>{state.value.toString()}</h2>
		</div>
	);
};
