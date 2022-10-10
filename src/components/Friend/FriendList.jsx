import { FriendListItem } from './FriendListItem';
import { Box } from '../Box';

export const FriendList = ({ friends }) => (
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
    <FriendListItem friends={friends} />
  </Box>
);
