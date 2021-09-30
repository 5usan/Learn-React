//code with useRef hook is being commented below
import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username or age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 0) {
      //+ changes string to number
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age > 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

//Using Ref to get input elements rather then state

// import React, { useState, useRef } from "react";
// import Card from "../UI/Card";
// import styles from "./AddUser.module.css";
// import Button from "./Button";
// import ErrorModal from "../UI/ErrorModal";

// const AddUser = (props) => {
//   const [error, setError] = useState();

//   const nameInputRef = useRef();
//   const ageInputRef = useRef();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     const enteredName = nameInputRef.current.value;
//     const enteredAge = ageInputRef.current.value;
//     if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         title: "Invalid Input",
//         message: "Please enter a valid username or age (non-empty values).",
//       });
//       return;
//     }

//     if (+enteredAge < 0) {
//       //+ changes string to number
//       setError({
//         title: "Invalid Age",
//         message: "Please enter a valid age (age > 0).",
//       });
//       return;
//     }

//     props.onAddUser(enteredName, enteredAge);
//     nameInputRef.current.value = '';
//     ageInputRef.current.value = '';

//   };

//   const errorHandler = () => {
//     setError(null);
//   };
//   return (
//     <>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" ref={nameInputRef} />
//           <label htmlFor="age">Age</label>
//           <input type="number" id="age" ref={ageInputRef} />
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </>
//   );
// };

// export default AddUser;
