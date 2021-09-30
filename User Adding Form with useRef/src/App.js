import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (nUsername, nAge) => {
    setUserList((prepUserList) => {
      return [
        ...prepUserList,
        { id:Math.random(), name: nUsername, age: nAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
