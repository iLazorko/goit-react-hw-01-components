import {
  FriendCard,
  FriendOnline,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <FriendCard key={id}>
        <FriendOnline isOnline={isOnline}></FriendOnline>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </FriendCard>
    );
  });
};
