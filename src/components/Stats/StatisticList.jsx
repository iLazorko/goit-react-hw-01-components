import { StatsList, StatsItem } from './StatisticList.styled';

export const StatisticList = ({ stats }) => {
  return (
    <StatsList>
      {stats.map((stat, index) => (
        <StatsItem key={stat.id} index={index}>
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </StatsItem>
      ))}
    </StatsList>
  );
};
