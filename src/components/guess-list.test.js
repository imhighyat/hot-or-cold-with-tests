import React from 'react';
import { shallow } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]} />);
	});

	it('Renders a list of guesses', () => {
		const listArray = [21, 56, 89];
		const wrapper = shallow(<GuessList guesses={listArray} />);
		const lists = wrapper.find('li');
		expect(listArray.length).toEqual(lists.length);
		listArray.forEach((value, index) => {
			expect(lists.at(index).text()).toEqual(value.toString());
		});
	});
});