import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext({
  authenticated: false,
  user: {},
});

const { Provider } = UserContext;

function reducer(state, action) {
  switch (action.type) {
    case "authenticate":
      return { ...state, authenticated: true };

    default:
      return state;
  }
}

function UserProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, false);
  return <Provider value={[state, dispatch]} {...props} />;
}

function useUserContext() {
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
