import { FC } from 'react';

type Props = { send: any; state: any };

export const ParentMachineView1: FC<Props> = ({ send, state }) => {
	return (
		<div>
			<h2>{state.value.toString()}</h2>
			<p>{`What is in email: ${state.context.email}`}</p>
			<p>{`What is in isLoggedIn: ${state.context.isLoggedIn}`}</p>
			<div style={{ display: 'flex', marginRight: '10px' }}>
				<button onClick={() => send('SET_IS_LOGGED_IN_TRUE')}>
					Set isLoggedIn to true
				</button>
				<button onClick={() => send('SET_EMAIL')}>Set email</button>
				<button onClick={() => send({ type: 'GO_TO_PARENT_MACHINE_STATE2' })}>
					Go to parent machine state 2
				</button>
			</div>
		</div>
	);
};
