import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textSecondary};
  width: 100%;
  color: ${p => p.theme.colors.white};
  background-color: blue;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  gap: ${p => p.theme.space[3]}px;
`;

export const StatsTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.text};
  text-align: center;
`;
