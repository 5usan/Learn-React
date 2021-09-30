import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  //Can be done using single state and objects also
  // const [userInput, setUserInput] = useState({
  //     enterTitle: '',
  //     enterAmount: '',
  //     enterDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    //When single state is used
    // setUserInput((prevState) => {    //it takes an object, pulls out all the key value pairs and adds them to new object
    //     return{
    //         ...prevState,
    //         enterTitle : event.target.value
    //     }
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value); //event.target.value is always in string form
    //When single state is used
    // setUserInput((prevState) => {    //it takes an object, pulls out all the key value pairs and adds them to new object
    //     return{
    //         ...prevState,
    //         enterTitle : event.target.value
    //     }
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    //When single state is used
    // setUserInput((prevState) => {    //it takes an object, pulls out all the key value pairs and adds them to new object
    //     return{
    //         ...prevState,
    //         enterTitle : event.target.value
    //     }
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,  //Changing amount to number from string
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
    props.onCancel();
  };

  const cancelHandler = () => {
    props.onCancel();
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
