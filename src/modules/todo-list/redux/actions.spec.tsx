import { actionConsts, todoListActions } from 'todo-list';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('TodoList action tests', () => {
	test('add', async () => {
		const store = mockStore({});

		const expectedActions = [
			{
				payload: {
					text: 'test',
				},
				type: actionConsts.todo.add,
			},
		];

		// eslint-disable-next-line
		await store.dispatch<any>(todoListActions.add({ text: 'test' }));

		expect(store.getActions()).toEqual(expectedActions);
	});
});
