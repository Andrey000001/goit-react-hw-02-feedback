import { List, Total, Positive } from './Statistics.styled';
export const Statistics = ({ stateAll, total, positivePercentage }) => {
  return (
    <div>
      <List>
        {Object.entries(stateAll).map(([key, values], index) => (
          <li key={index}>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span> :{' '}
            <span>{values}</span>
          </li>
        ))}
      </List>
      <Total>Total : {total}</Total>
      <Positive>Positeve feedback: {positivePercentage}%</Positive>
    </div>
  );
};
