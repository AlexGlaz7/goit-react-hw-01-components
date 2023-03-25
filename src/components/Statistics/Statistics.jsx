import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title }) => (
  <Section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className="item"
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};