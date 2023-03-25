import { Item } from '../FriendsListItem/FriendsListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item isOn={isOnline}>
    <span className="status"></span>
    <img className="avatar" src={avatar} alt={name + ' avatar'} width="48" />
    <p className="name">{name}</p>
  </Item>
);