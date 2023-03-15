import { Table, Head, Body, Element } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export default function TransactionHistory({ data }) {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <Body>
        {data.map((e, i) => {
          return (
            <Element key={e.id} index={i}>
              <td>{e.type}</td>
              <td>{e.amount}</td>
              <td>{e.currency}</td>
            </Element>
          );
        })}
      </Body>
    </Table>
  );
}

TransactionHistory.propTypes = [
  PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
];
