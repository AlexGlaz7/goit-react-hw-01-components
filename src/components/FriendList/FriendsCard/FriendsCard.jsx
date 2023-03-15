import PropTypes from 'prop-types';
import {
  FriendCardItem,
  UserAvatar,
  IsOnlineMarker,
  UserName,
} from './FriendsCard.styled';
import { isOnlineFunc } from '../../../Utils/index';
export default function FriendsCard({ data }) {
  // console.log(data);
  return (
    <FriendCardItem>
      <IsOnlineMarker
        style={{ backgroundColor: `${isOnlineFunc(data.isOnline)}` }}
      ></IsOnlineMarker>
      <UserAvatar src={data.avatar} alt="User avatar" width="48" />
      <UserName>{data.name}</UserName>
    </FriendCardItem>
  );
}

FriendsCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
