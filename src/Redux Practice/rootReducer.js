//we created rootReducer to combine all reducers

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    product: productReducer

})

export default rootReducer;