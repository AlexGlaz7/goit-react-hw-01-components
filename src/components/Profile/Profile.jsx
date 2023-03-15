import PropTypes from 'prop-types';
import {
  StatsQuantity,
  ProfileCard,
  StatsItem,
  Stats,
  Description,
  UserPhoto,
  UserName,
  UserInformation,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <ProfileCard>
      <Description>
        <UserPhoto src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInformation>@{tag}</UserInformation>
        <UserInformation>{location}</UserInformation>
      </Description>

      <Stats>
        <StatsItem>
          <span className="label">Followers </span>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views </span>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes </span>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
