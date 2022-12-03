import { useReducer } from "react";

const initialState = 0;
const Child = () => {
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> {state}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        Increment
      </button>
    </div>
  );
};

export default Child;
