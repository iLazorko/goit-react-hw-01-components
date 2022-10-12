import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Box } from '../Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      bg="backgroundPrimary"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      width="250px"
      gridGap={4}
      position="absolute"
      top="16px"
      left="450px"
      as="ul"
    >
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
