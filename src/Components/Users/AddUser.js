import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const [error, setError] = useState();

  const addUserhandler = (event) => {
    const enteredName = inputNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;

    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter A Valid Name And Age (Non-Empty Values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter A Valid Age (>0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={inputNameRef} />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" ref={inputAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;
