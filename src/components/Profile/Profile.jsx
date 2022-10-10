import PropTypes from 'prop-types';
import {
  UserName,
  UserInfo,
  UserStat,
  UserStatQuantity,
  UserAvatar,
} from './Profile.styled';
import { Box } from '../Box';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Box
      bg="backgroundPrimary"
      width="300px"
      height="480px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="normal"
      mb="128px"
      pt="16px"
    >
      <UserAvatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserInfo>@{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>

      <Box bg="backgroundSecondary" display="flex" as="ul" borderTop="normal">
        <UserStat>
          <span>Followers</span>
          <UserStatQuantity>{followers}</UserStatQuantity>
        </UserStat>
        <UserStat>
          <span>Views</span>
          <UserStatQuantity>{views}</UserStatQuantity>
        </UserStat>
        <UserStat>
          <span>Likes</span>
          <UserStatQuantity>{likes}</UserStatQuantity>
        </UserStat>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
