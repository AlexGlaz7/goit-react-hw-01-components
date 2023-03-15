import PropTypes from 'prop-types';
import BookList from './BookList/BookList';
import { StatisticsSection, Title, StatList } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection className="statistics">
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map((e, i) => {
          return <BookList key={e.id} data={e} index={i} />;
        })}
      </StatList>
    </StatisticsSection>
  );
}
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
