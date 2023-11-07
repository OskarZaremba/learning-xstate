import { useActor } from '@xstate/react';
import { FC } from 'react';
import { ChildMachineView1 } from './ChildMachineView1';
import { ChildMachineView2 } from './ChildMachineView2';
import { ChildMachineView3 } from './ChildMachineView3';

export const ChildProcess: FC<{ parentState: any }> = ({ parentState }) => {
	console.log('### co masz w parentState: ', parentState);
	const { childMachine } = parentState.children;
	const [state, send] = useActor(childMachine);

	switch ((state as any).value.toString()) {
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
