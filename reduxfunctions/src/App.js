import React from "react";
import { applyMiddleware, createStore } from "redux";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const reducers = (initialState = 0, action) => {
      if (action.type === "INC") {
        return initialState + 1;
      } else if (action.type === "DEC") {
        return initialState - 1;
      } else if (action.type === "E") {
        throw new error("AAAAA!!!!!");
      }
      return initialState;
    };
    const logger = store => next => action => {
      console.log("action fired", action);
      next(action);
    };
    const error = store => next => action => {
      try {
        next(action);
      } catch (E) {
        console.log("err!!!!", E);
      }
    };

    const middleware = applyMiddleware(logger);

    const store = createStore(reducers, 1, middleware);

    store.subscribe(() => {
      console.log("store changed", store.getState());
    });

    store.dispatch({ type: "CHANGE_NAME", payload: "konark jha" });
    store.dispatch({ type: "CHANGE_AGE", payload: 26 });
    store.dispatch({ type: "CHANGE_AGE", payload: 27 });
    store.dispatch({ type: "E", payload: "A!!!!!!!!!" });

    return <div>YOLO</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
