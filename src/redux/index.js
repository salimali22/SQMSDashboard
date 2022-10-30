

import { createStore } from "redux";
import { loginreducer } from "./reducer/reducer";

const prodStore = createStore(loginreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default prodStore;