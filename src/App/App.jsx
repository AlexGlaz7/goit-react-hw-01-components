// import PropTypes from 'prop-types';

import Profile from '../components/Profile/Profile';
import user from '../user';
import Statistics from '../components/Statistics/Statistics';
import data from '../data';
import FriendList from '../components/FriendList/FriendList';
import friends from '../friends';
import { Container } from './App.styled';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transaction from '../transactions';

export const App = () => {
  return (
    <Container>
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        stats={user.stats}
      />
      <Statistics title stats={data} />

      <FriendList data={friends} />

      <TransactionHistory data={transaction} />
    </Container>
  );
};
