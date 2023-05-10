import { createStore } from "redux";
import counterReducer from "./reducer/counterReducer";

const store = createStore(
    counterReducer, /* preloadedState, */
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store