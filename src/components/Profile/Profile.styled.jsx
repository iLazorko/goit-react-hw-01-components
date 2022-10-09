import styled from '@emotion/styled';

export const UserName = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: 0;
  text-align: center;
`;

export const UserInfo = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: 0;
`;

export const UserStat = styled.li`
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  padding: ${p => p.theme.space[4]}px;
  border-color: ${p => p.theme.colors.textSecondary};
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
  gap: ${p => p.theme.space[3]}px;
`;

export const UserStatQuantity = styled.span`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  ${'' /* margin-top: ${p => p.theme.space[4]}px; */}
`;

export const UserAvatar = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.round};
  overflov: hidden;
`;
