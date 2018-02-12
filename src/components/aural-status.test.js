import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
	it('Renders without crashing', () => {
		shallow(<AuralStatus auralStatus="This is the aural status right now." />);
	});

	it('Renders the aural status', () => {
		const status = "This is the aural status right now.";
		const wrapper = shallow(<AuralStatus auralStatus={status} />);
		expect(wrapper.text()).toEqual(status);
	});
});