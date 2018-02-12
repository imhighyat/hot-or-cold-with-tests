import React from 'react';
import { shallow } from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
	it('Renders without crashing', () => {
		shallow(<StatusSection guesses={[]} auralStatus="This is the current status." />);
	});
});
