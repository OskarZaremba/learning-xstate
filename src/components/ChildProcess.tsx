import { useMachine } from '@xstate/react';
import React, { FC } from 'react';
import { childMachine } from '../machines/childMachine/childMachine';
import { ChildMachineView1 } from './ChildMachineView1';
import { ChildMachineView2 } from './ChildMachineView2';
import { ChildMachineView3 } from './ChildMachineView3';

export const ChildProcess: FC = () => {
	const [state, send] = useMachine(childMachine);

	switch (state.value.toString()) {
		case 'childMachineState1':
			return <ChildMachineView1 send={send} state={state} />;
		case 'childMachineState2':
			return <ChildMachineView2 send={send} state={state} />;
		case 'childMachineState3':
			return <ChildMachineView3 send={send} state={state} />;
		default:
			return <></>;
	}
};
