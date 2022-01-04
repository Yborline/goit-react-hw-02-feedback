import { Component } from 'react';
import Section from './componets/Section/Section';
import Buttons from './componets/Buttons/Buttons';
import Statistics from './componets/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleSum = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleOnClick = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  handlePositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (good * 100) / total;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.handlePositivePercentage();
    const total = this.handleSum();
    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons names={this.state} onClick={this.handleOnClick} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            'No feedback given'
          )}
        </Section>
      </div>
    );
  }
}

export default App;
