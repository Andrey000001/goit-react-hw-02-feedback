import { Component } from 'react';
import { Container } from './Feedback.styled';
import CreateButtons from 'components/CreateBtn/CreateBtn';
import { TitleFeadback } from './Feedback.styled';
class Feedback extends Component {
  //  Render :)
  render() {
    const { title, statistic } = this.props;

    return (
      <Container>
        {title && <TitleFeadback>{title}</TitleFeadback>}
        <CreateButtons textforstatistic={statistic} />
      </Container>
    );
  }
}

export default Feedback;
