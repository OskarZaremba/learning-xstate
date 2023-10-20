import { useMachine } from '@xstate/react';
import { FC } from 'react';
import { ParentMachineView1 } from './ParentMachineView1';
import { ChildProcess } from './ChildProcess';
import { ParentMachineView3 } from './ParentMachineView3';
import { ParentMachineView4 } from './ParentMachineView4';
import { parentMachine } from '../machines/parentMachine/parentMachine';

export const ParentProcess: FC = () => {
	const [state, send] = useMachine(parentMachine);
	console.log('### co masz w state: ', state.value);

	switch (state.value.toString()) {
		case 'parentMachineState1':
			return <ParentMachineView1 send={send} state={state} />;
		case 'parentMachineState2':
			return <ChildProcess />;
		case 'parentMachineState3':
			return <ParentMachineView3 send={send} state={state} />;
		case 'parentMachineState4':
			return <ParentMachineView4 state={state} />;
		default:
			return <>kuku</>;
	}
};
