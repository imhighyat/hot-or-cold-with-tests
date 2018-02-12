import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Should clear the input value after form submit', () => {
		const wrapper = mount(<GuessForm />);
		const input = wrapper.find('#userGuess');
		input.instance().value = 5;
		wrapper.simulate('submit');
		expect(input.instance().value).toEqual('');
	});

	it('Should fire onMakeGuess function prop on form submit', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
		const value = 10;
		wrapper.find('#userGuess').instance().value = value;
		wrapper.simulate('submit');
    	expect(callback).toHaveBeenCalledWith(value.toString());
	});
});


