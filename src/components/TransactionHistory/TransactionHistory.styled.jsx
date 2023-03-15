import styled from '@emotion/styled';

const Table = styled.table`
  background-color: #ecf1f4;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
`;
const Head = styled.thead`
  tr {
    background-color: #00bed5;
  }
`;
const Body = styled.tbody`
  text-align: center;
`;
const Element = styled.tr`
  background-color: ${props => (props.index % 2 ? '#EBF2F4' : 'white')};
`;
export { Table, Head, Body, Element };
