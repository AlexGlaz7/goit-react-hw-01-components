// import PropTypes from 'prop-types';

import Profile from '../components/Profile/Profile';
import user from '../data/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import stats from '../data/data.json';
import {FriendList} from '../components/FriendList/FriendList';
import friends from '../data/friends.json';
import { Container } from './App.styled';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import items from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </Container>
  );
};
