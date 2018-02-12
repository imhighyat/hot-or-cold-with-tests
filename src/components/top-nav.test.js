import React from 'react';
import { shallow } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Should fire onRestartGame when new game is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onRestartGame={callback} />);
		const newGameLink = wrapper.find('.new');
		newGameLink.simulate('click', { preventDefault() {} });
		expect(callback).toHaveBeenCalled();
	});

	it('Should fire onGenerateAuralUpdate when get status is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
		const updateLink = wrapper.find('.status-link');
		updateLink.simulate('click', { preventDefault() {} });
		expect(callback).toHaveBeenCalled();
	});
});