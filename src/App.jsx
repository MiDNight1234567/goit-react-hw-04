import "./App.css";

import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";

import friends from "./data/friends.json";
import FriendList from "./components/FriendListItem/FriendList";

import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
