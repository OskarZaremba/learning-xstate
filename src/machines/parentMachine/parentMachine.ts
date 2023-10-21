import { createMachine } from 'xstate';
import { childMachine } from '../childMachine/childMachine';

export const parentMachine = createMachine(
	{
		predictableActionArguments: true,
		initial: 'parentMachineState1',
		context: {
			isLoggedIn: false,
		},
		states: {
			parentMachineState1: {
				on: {
					GO_TO_PARENT_MACHINE_STATE2: [
						{ cond: 'isLoggedIn', target: 'parentMachineState3' },
						{ target: 'parentMachineState2' },
					],
				},
			},
			parentMachineState2: {
				invoke: {
					id: 'childMachine',
					src: childMachine,
					onDone: 'parentMachineState3',
				},
			},
			parentMachineState3: {
				on: { GO_TO_PARENT_MACHINE_STATE4: 'parentMachineState4' },
			},
			parentMachineState4: { type: 'final' },
		},
	},
	{
		guards: {
			isLoggedIn: (context) => context.isLoggedIn === true,
		},
	}
);
