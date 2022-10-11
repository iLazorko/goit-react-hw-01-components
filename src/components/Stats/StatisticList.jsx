import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(({ id, label, percentage }, index) => (
        <StatsItem key={id} index={index}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </StatsItem>
      ))}
    </StatsList>
  );
};

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
