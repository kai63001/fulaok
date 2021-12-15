import { ADD_DATA_USER } from "../actions/loginAction";

const LoginReducter = (state: any = { value: { login: false } }, actions: { type: any; payload: any; }) => {
//   console.log(actions)
//   console.log("type:",state.type)
  switch (actions.type) {
    case ADD_DATA_USER:
      return {
        ...state,
        value: {...actions.payload}
      };
    default:
      return {
        ...state
      };
  }
};

export default LoginReducter;