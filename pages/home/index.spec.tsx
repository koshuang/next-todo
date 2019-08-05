import * as React from 'react';
import { shallow, mount } from 'enzyme';
import HomePage from '../home/index';

import { Provider } from 'react-redux';

import { store } from 'app';
import console = require('console');

describe('HomePage', () => {
	// it('should render without throwing an error', () => {
	// 	const wrap = shallow(<HomePage />);
	// 	expect(wrap).toBeTruthy();
	// });

	it('should render without throwing an error', () => {
		const wrap = mount(
			<Provider store={store()}>
				<HomePage />
			</Provider>,
    );


		expect(wrap.find('img')).toHaveLength(1);
	});
});
