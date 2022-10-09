/**
 * 
 * <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li> 
 */

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, avatar, name, isOnline }) => {
    return (
      <li key={id}>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    );
  });
};
