import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import css from './App.module.css';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addFeedbackGood = () =>
  //   this.setState(prev => ({
  //     good: prev.good + 1,
  //   }));
  // addFeedbackNeutral = () =>
  //   this.setState(prev => ({
  //     neutral: prev.neutral + 1,
  //   }));
  // addFeedbackBad = () =>
  //   this.setState(prev => ({
  //     bad: prev.bad + 1,
  //   }));

  addFeedback = type => {
    this.setState(prev => ({
      [type]: prev[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) + '%' : 0;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions feedback={this.addFeedback} />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentge={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
