import React from "react";
import { conbineReducers, createStore, combineReducers } from "redux";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const userReducer = (state = {}, action) => {
      switch (action.type) {
        case "CHANGE_NAME": {
          state = { ...state, name: action.payload };
          break;
        }
        case "CHANGE_AGE": {
          state = { ...state, age: action.payload };
          break;
        }
      }
      return state;
    };
    const tweersReducer = (state = [], action) => {
      return state;
    };
    const reducers = combineReducers({
      user: userReducer,
      tweets: tweersReducer
    });
    const store = createStore(reducers);

    store.subscribe(() => {
      console.log("store changed", store.getState());
    });

    store.dispatch({ type: "CHANGE_NAME", payload: "konark jha" });
    store.dispatch({ type: "CHANGE_AGE", payload: 26 });
    store.dispatch({ type: "CHANGE_AGE", payload: 27 });

    return <div>App2</div>;
  }
}

ReactDOM.render(App, document.getElementById("root"));

export default App;
