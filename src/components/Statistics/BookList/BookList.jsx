import PropTypes from 'prop-types';
import { ListItem } from './Booklist.styled';

export default function BookList({ data, index }) {
  // console.log(data);
  const { label, percentage } = data;
  return (
    <ListItem index={index}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </ListItem>
  );
}

BookList.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
