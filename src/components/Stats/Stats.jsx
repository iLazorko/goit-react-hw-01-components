import { StatisticList } from './StatisticList';
import { StatsTitle } from './StatisticList.styled';
import data from '../../json/data.json';
import { Box } from '../Box';

export const Stats = ({ title }) => {
  return (
    <Box
      bg="backgroundPrimary"
      width="400px"
      height="200px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="normal"
    >
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatisticList stats={data} />
    </Box>
  );
};
