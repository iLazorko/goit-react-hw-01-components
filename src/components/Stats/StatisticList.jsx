import { StatsList, StatsItem } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(stat => (
        <StatsItem key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </StatsItem>
      ))}
    </StatsList>
  );
};
