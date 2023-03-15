import styled from '@emotion/styled';

const FriendCardItem = styled.li`
  display: flex;
  align-items: center;
`;
const IsOnlineMarker = styled.span`
  border-radius: 50%;
  width: 25px;
  height: 25px;
`;

const UserName = styled.span`
  margin-left: 15px;
`;

const UserAvatar = styled.img`
  margin-left: 15px;
`;

export { FriendCardItem, UserAvatar, IsOnlineMarker, UserName };
