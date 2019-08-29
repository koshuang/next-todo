import { combineReducers } from 'redux';

import { wrapperReducer } from './wrapper';
import { reducers as todoListReducers } from 'todo-list';

export default combineReducers({
	wrapper: wrapperReducer,
	...todoListReducers,
});
