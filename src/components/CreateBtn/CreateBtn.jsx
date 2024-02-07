import { Component } from 'react';
import Statistic from 'components/Statistics/Statistics';
import { TitleStatistic, Button, SubtitleGive } from './CreateBtn.styled';

class CreateButtons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //Cоздаем кнопки
  createButtons = () => {
    const keyBtn = Object.keys(this.state).map(buttonName => (
      <Button
        type="button"
        key={buttonName}
        onClick={() => this.handleButtonClick(buttonName)}
      >
        {buttonName}
      </Button>
    ));
    return keyBtn;
  };

  // Счетчик
  handleButtonClick = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const hasFeedback = good > 0 || neutral > 0 || bad > 0;

    return (
      <div>
        {this.createButtons()}
        {this.props.textforstatistic && (
          <TitleStatistic>{this.props.textforstatistic}</TitleStatistic>
        )}
        {!hasFeedback && <SubtitleGive>No feedback given</SubtitleGive>}
        {hasFeedback && <Statistic state={this.state} />}
      </div>
    );
  }
}
export default CreateButtons;
