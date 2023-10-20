import React, { FC } from 'react';

type Props = { state: any };

export const ParentMachineView4: FC<Props> = ({ state }) => {
	return (
		<div>
			<h2>{`Parent machine ${state.value.toString()} state`}</h2>
		</div>
	);
};
