import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  border: ${p => p.theme.borders.normal};
  text-align: center;
  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.statColors[0]};
  border-color: ${p => p.theme.colors.textSecondary};
  padding: ${p => p.theme.space[3]}px;
`;
