import { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import { Container } from './App.styled';

class App extends Component {
  render() {
    return (
      <Container>
        <Feedback title="Please leave feee" statistic="Statistic" />
      </Container>
    );
  }
}

export default App;
