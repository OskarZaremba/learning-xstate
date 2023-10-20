import React, { FC } from 'react';

type Props = { send: any; state: any };

export const ChildMachineView2: FC<Props> = ({ state }) => {
	return (
		<div>
			<h2>{`Child machine ${state.value.toString()} state`}</h2>
		</div>
	);
};
