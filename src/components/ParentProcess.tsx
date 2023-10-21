import { useMachine } from '@xstate/react';
import { FC, useMemo } from 'react';
import { ParentMachineView1 } from './ParentMachineView1';
import { ChildProcess } from './ChildProcess';
import { ParentMachineView3 } from './ParentMachineView3';
import { ParentMachineView4 } from './ParentMachineView4';
import { parentMachine } from '../machines/parentMachine/parentMachine';

export const ParentProcess: FC = () => {
	const memoizedParentMachine = useMemo(() => parentMachine, []);
	const [state, send] = useMachine(memoizedParentMachine);

	switch (state.value.toString()) {
		case 'parentMachineState1':
			return <ParentMachineView1 send={send} state={state} />;
		case 'parentMachineState2':
			return <ChildProcess parentState={state} parentSend={send} />;
		case 'parentMachineState3':
			return <ParentMachineView3 send={send} state={state} />;
		case 'parentMachineState4':
			return <ParentMachineView4 state={state} />;
		default:
			return <></>;
	}
};
