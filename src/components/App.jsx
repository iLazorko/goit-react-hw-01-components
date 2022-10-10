import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { FriendList } from './Friend/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import user from '../json/user.json';
import transaction from '../json/transactions.json';
import friends from '../json/friends.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Stats title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </>
  );
};
