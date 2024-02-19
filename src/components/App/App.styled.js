import styled from '@emotion/styled';
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
  fontsize: 40px;
  color: #010101;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Button = styled.button`
  padding: 5px 25px;
  margin-top: 20px;
  border-radius: 5px;
  border-color: transparent;
  font-size: 18px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: #a5d2e9;
  }
`;

