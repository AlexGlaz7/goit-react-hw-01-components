import styled from 'styled-components';

export const Table = styled.table`
  font-size: 16px;
  color: white;
  border: 1px solid #e4dede;
  border-spacing: 0.5px;
  box-shadow: 5px 5px 10px grey;
  & thead {
    background-color: #5dcedb;
    & th {
      padding: 5px 50px;
    }
  }
  & tbody {
    color: #3b3838;
    & td {
      padding: 5px 50px;
    }
    & tr:nth-last-child(even) {
      background-color: #e6e5e5;
    }
    & tr {
      &:hover {
        background-color: orange;
      }
    }
  }
`;