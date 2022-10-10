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
