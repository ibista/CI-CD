import React from 'react'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import {thunk} from 'redux-thunk'
//we have to install the side effect THUNK from the terminal similar to react-redux

const store = createStore(rootReducer, applyMiddleware(thunk)) //applied middleware think for extracting data via API calls using thunk
export default store





//API fetch with Redux Thunk



// What is rootReducer?
// In a big app, you usually have multiple reducers, like:

// js
// Copy
// Edit
// counterReducer
// userReducer
// authReducer
// You can't give all of them separately to createStore() — so you combine them using combineReducers(), and that result is called the rootReducer.