import { useMachine } from '@xstate/react';
import { FC, useMemo } from 'react';
import { ParentMachineView1 } from './ParentMachineView1';
import { ChildProcess } from './ChildProcess';
import { ParentMachineView3 } from './ParentMachineView3';
import { ParentMachineView4 } from './ParentMachineView4';
import { parentMachine } from '../machines/parentMachine/parentMachine';

export const ParentProcess: FC = () => {
	const memoizedParentMachine = useMemo(() => parentMachine, []);
	// const getFromStorage = localStorage.getItem('testingEmail');
	const getFromStorage = localStorage.getItem('testingState');
	const recoveredState = getFromStorage
		? JSON.parse(getFromStorage)
		: memoizedParentMachine.initialState;
	// const storedEmail = getFromStorage ? JSON.parse(getFromStorage) : '';
	// const storedContext =
	// 	getFromStorage !== null
	// 		? JSON.parse(getFromStorage)
	// 		: memoizedParentMachine.initialState.context;
	const [state, send, actor] = useMachine(memoizedParentMachine, {
		state: recoveredState,
	});
	actor.onTransition((state) => {
		if (state.changed) {
			if (state.value !== 'parentMachineState2') {
				localStorage.setItem('testingState', JSON.stringify(state));
				console.log('### jaki masz teraz state: ', state);
			}
		}
	});
	// console.log('### co masz w parent state: ', state);

	switch (state.value.toString()) {
		case 'parentMachineState1':
			return <ParentMachineView1 send={send} state={state} />;
		case 'parentMachineState2':
			return <ChildProcess parentState={state} />;
		case 'parentMachineState3':
			return <ParentMachineView3 send={send} state={state} />;
		case 'parentMachineState4':
			return <ParentMachineView4 state={state} />;
		default:
			return <></>;
	}
};
