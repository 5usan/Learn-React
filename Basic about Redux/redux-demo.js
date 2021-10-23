const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState(), "initial counter");

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState, "latest counter");
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });

store.dispatch({type: 'decrement'});
