//we created rootReducer to combine all reducers

import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer

})

const store = createStore(rootReducer)

export default rootReducer;