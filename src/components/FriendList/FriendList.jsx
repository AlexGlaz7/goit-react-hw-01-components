import PropTypes from 'prop-types';
import FriendsCard from './FriendsCard/FriendsCard';
import { FriendListEl } from './FriendList.styled';

export default function FriendList({ data }) {
  return (
    <FriendListEl>
      {data.map(e => {
        return <FriendsCard key={e.id} data={e} />;
      })}
    </FriendListEl>
  );
}
FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
