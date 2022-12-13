import user from '../data/user';
import dataStats from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import TransactionHistory from './transactionhistory/TransactionHistory'

export const App = () => {
  return (   
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />  
      <Statistics
        title='UPLOAD STATS'
        stats={dataStats}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  );
};
