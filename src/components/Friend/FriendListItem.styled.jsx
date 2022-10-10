import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: ${p => p.theme.borders.normal};
  box-shadow: 10px 10px 5px -8px rgba(115, 114, 115, 1);
  width: 100%;
  padding: ${p => p.theme.space[4]}px;
`;

export const FriendOnline = styled.span`
  background-color: ${({ isOnline, theme }) =>
    isOnline ? theme.colors.green : theme.colors.red};
  width: 10px;
  height: 10px;
  display: block;
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: ${p => p.theme.space[3]}px;
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
