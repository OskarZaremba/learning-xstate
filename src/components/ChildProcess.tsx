import { useActor } from '@xstate/react';
import { FC } from 'react';
import { ChildMachineView1 } from './ChildMachineView1';
import { ChildMachineView2 } from './ChildMachineView2';
import { ChildMachineView3 } from './ChildMachineView3';

export const ChildProcess: FC<{ parentState: any; parentSend: any }> = ({
	parentState,
	parentSend,
}) => {
	const { childMachine } = parentState.children;
	const [childState] = useActor(childMachine);

	switch ((childState as any).value.toString()) {
		case 'childMachineState1':
			return <ChildMachineView1 send={parentSend} state={childState} />;
		case 'childMachineState2':
			return <ChildMachineView2 send={parentSend} state={childState} />;
		case 'childMachineState3':
			return <ChildMachineView3 send={parentSend} state={childState} />;
		default:
			return <></>;
	}
};
