import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { StatsTitle } from './StatisticList.styled';
import { Box } from '../Box';

export const Stats = ({ title, data }) => {
  return (
    <Box
      bg="backgroundPrimary"
      width="400px"
      height="128px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="normal"
      mb={5}
    >
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatisticList stats={data} />
    </Box>
  );
};

Stats.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
