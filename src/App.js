import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserhandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserhandler} />
      <UserList users={userList} />
    </div>
  );
};
export default App;
