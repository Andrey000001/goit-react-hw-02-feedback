import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionTitle } from 'components/Section-Title/SectionTitle';
import { Notification } from 'components/Notification/Notification';
import { Container, Button } from './App.styled';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = button => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1,
    }));
  };

  createBtns = () => {
    const buttons = Object.keys(this.state).map(button => (
      <Button onClick={() => this.handleClick(button)}>{button}</Button>
    ));
    return buttons;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = (good / total) * 100 || 0;
    return positiveFeedback.toFixed(0);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions option={this.createBtns()} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              stateAll={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </Container>
    );
  }
}

export default App;
