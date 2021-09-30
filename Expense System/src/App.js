import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 10000,
    date: new Date(2021, 12, 28),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 5000,
    date: new Date(2021, 2, 8),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 10000,
    date: new Date(), //Gives current date
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 10000,
    date: new Date(2021, 5, 2),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
