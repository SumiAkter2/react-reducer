import { actionTypes } from "../Pages/actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  terms: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.Input:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.Toggle:
      return {
        ...state,
        terms: !state.terms,
      };
    case "INCREMENT":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
