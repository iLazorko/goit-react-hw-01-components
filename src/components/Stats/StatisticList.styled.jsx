import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textSecondary};
  width: 100%;
  color: ${p => p.theme.colors.white};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
  text-align: center;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  gap: ${p => p.theme.space[3]}px;
  background-color: ${({ index, theme }) => theme.colors.statColors[index]};
`;

export const StatsTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
  text-align: center;
`;
