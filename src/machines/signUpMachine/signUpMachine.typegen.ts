// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
	'@@xstate/typegen': true;
	internalEvents: {
		'xstate.init': { type: 'xstate.init' };
	};
	invokeSrcNameMap: {
		'submitCredentials': 'done.invoke.signUpMachine.submittingCredentials:invocation[0]';
	};
	missingImplementations: {
		actions: never;
		delays: never;
		guards: never;
		services: never;
	};
	eventsCausingActions: {};
	eventsCausingDelays: {};
	eventsCausingGuards: {};
	eventsCausingServices: {
		'submitCredentials': 'SIGNUP_VIA_CREDENTIALS';
	};
	matchesStates: 'chooseMethod' | 'signUpSuccessful' | 'submittingCredentials';
	tags: never;
}
