import styled from 'styled-components';

export const Section = styled.section`
justify-content: center;
  & .title {
    text-transform: uppercase;
    color: black;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;}
  & .stat-list {
    display: flex;
    justify-content: center;
    padding: 0;
    & .item {
      display: flex;
      flex-direction: column;
      align-items: center;
    
      width: 60px;
      padding: 20px;
    
      color: #fff;
      &:hover {
        color: black;
      }
      & .percentage {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
`;