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
    <React.Fragment>
      <AddUser onAddUser={addUserhandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
};
export default App;
