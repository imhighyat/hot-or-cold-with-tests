import React from 'react';
import { shallow } from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });

  it('Should be able to restart the game', () => {
  	const wrapper = shallow(<Game />);
  	wrapper.setState({
      	guesses: [56, 89, 45, 21],
	    feedback: 'Awesome',
	    correctAnswer: 25
    });
  	wrapper.instance().restartGame();
  	expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  });

  it('Should be able to make guesses', () => {
  	const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 33
    });
    wrapper.instance().makeGuess(90);
    expect(wrapper.state('guesses')).toEqual([90]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(65);
    expect(wrapper.state('guesses')).toEqual([90, 65]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(44);
    expect(wrapper.state('guesses')).toEqual([90, 65, 44]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(25);
    expect(wrapper.state('guesses')).toEqual([90, 65, 44, 25]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(33);
    expect(wrapper.state('guesses')).toEqual([90, 65, 44, 25, 33]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });

  it('Should be able to show aural updates', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
      correctAnswer: 33
    });

    wrapper.instance().makeGuess(65);
    wrapper.instance().makeGuess(10);
    wrapper.instance().makeGuess(44);

    wrapper.instance().generateAuralUpdate();

    expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Warm. You\'ve made 3 guesses. In order of most- to least-recent, they are: 44, 10, 65');
  });
});