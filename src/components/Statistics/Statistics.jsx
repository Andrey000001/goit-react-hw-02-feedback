import { Component } from 'react';
import { Item, ListStatistic } from './Statistic.styled';
class Statistic extends Component {
  //Выводим информацию о нажатии
  showStatistic = () => {
    //Проверка на null and undefined
    const { state } = this.props;

    if (state === null || state === undefined) {
      return;
    }
    //Получаем Total
    const total = Object.values(state).reduce((acc, value) => value + acc, 0);

    // %
    const percentGood = total === 0 ? 0 : (state.good / total) * 100;

    //Перебираем 3 ключа добовляем 2 ключа и обрабатываем
    return Object.entries(state).map(([buttonName, value]) => (
      <Item key={buttonName}>
        {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)} : {value}
        {buttonName === 'bad' && (
          <>
            <span style={{ margin: '5px 0px' }}>Total : {total}</span>
            <span>Positive feedback: {percentGood.toFixed(0)}%</span>
          </>
        )}
      </Item>
    ));
  };

  render() {
    return <ListStatistic>{this.showStatistic()}</ListStatistic>;
  }
}

export default Statistic;
