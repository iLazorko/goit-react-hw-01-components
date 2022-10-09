import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { FriendList } from './Friend/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import user from '../json/user.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Stats title="Upload stats" />
      <div>
        <FriendList />
      </div>
      <div>
        <TransactionHistory />
      </div>
    </>
  );
};
