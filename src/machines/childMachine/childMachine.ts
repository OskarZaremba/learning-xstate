import { createMachine } from 'xstate';

export const childMachine = createMachine({
	initial: 'childMachineState1',
	states: {
		childMachineState1: {
			on: { GO_TO_CHILD_MACHINE_STATE2: 'childMachineState2' },
		},
		childMachineState2: {
			invoke: {
				src: async () =>
					new Promise((resolve) => {
						setTimeout(() => resolve(true), 1000);
					}),
				onDone: 'childMachineState3',
			},
		},
		childMachineState3: {
			type: 'final',
		},
	},
});
