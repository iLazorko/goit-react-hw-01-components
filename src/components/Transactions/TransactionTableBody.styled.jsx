import styled from '@emotion/styled';

export const TableColumn = styled.td`
  border: ${p => p.theme.borders.normal};
  text-align: center;
  color: ${p => p.theme.colors.textSecondary};
  padding: ${p => p.theme.space[3]}px;
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: rgb(229, 226, 226);
  }
`;
