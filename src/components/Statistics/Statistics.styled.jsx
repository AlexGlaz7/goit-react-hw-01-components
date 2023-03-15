import styled from '@emotion/styled';

const StatisticsSection = styled.section`
  width: 400px;
  background-color: lightgray;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const Title = styled.h2`
  text-align: center;
  background-color: #f1dddd;
  margin: 0;
  padding: 20px;
`;

const StatList = styled.ul`
  display: flex;
  list-style: none;
  height: 50px;
  padding: 0;
  margin: 0;
`;

export { StatisticsSection, Title, StatList };
