import { combineReducers } from 'redux';

import { wrapperReducer } from './wrapper';
import { reducers as demoReducers } from 'demo';

export default combineReducers({
	wrapper: wrapperReducer,
	...demoReducers,
});
