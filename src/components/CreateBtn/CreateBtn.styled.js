import styled from '@emotion/styled';

export const TitleStatistic = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  margin-top: 20px;
`;
export const SubtitleGive = styled.h2`
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 2px 10px;
  font-size: 18px;
  background-color: #e3e1e1;
  border-radius: 5px;
  border-color: transparent;
  color: black;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover,
  :active {
    background-color: #adadad;
    color: white;
    transform: scale(1.05);
  }
`;
