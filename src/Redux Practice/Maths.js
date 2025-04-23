import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import productReducer from './productReducer'
import counterReducer from './counterReducer'
import fetchValueFromAPI from './fetchValueFromAPI'

const Maths = () => {
    
    // const[state, setState] = useState(0); //currently using the useState only

    //now let's use useSelector to get the state from global store and useDispatch to dispatch the action to the reducer and store
    const state = useSelector((state) => state); //get the state from redux store
    const dispatch = useDispatch();//used to send actions
    const productState = useSelector(state => state.product);
    const counterState = useSelector(state => state.counter);
    
    const handleIncrement = () => {
        dispatch({type: 'INCREMENT'})
    }
    const handleDecrement = () => {
        dispatch({type: 'DECREMENT'})
    }
    const handleReset = () => {
        dispatch({type: 'RESET'})
    }

    const setValue = () => {
        dispatch({type: 'SET_VALUE', payload: 50})
    }
    const handleFetch =() =>{

        return async(dispatch) => {
            const res = await fetch('https://dummyjson.com/products/1');
            const data = await res.json();
            console.log("Check Data", data);
            dispatch({type: 'SET_VALUE_FROM_API', payload: data}) //dispatched the type and payload to reducer
        }
    }
        
    useEffect(() => {
      dispatch(fetchValueFromAPI()); // Dispatch action to fetch data on component mount
  }, [dispatch]);


    console.log("Product State", productState)
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {/* <br/> */}
      <button onClick = {handleReset}>Reset</button>
      <button onClick = {setValue}>Set 50</button>
      <button onClick = {() => dispatch(handleFetch())}>Fetch Values</button>

      <div>
    <h1>Counter: {counterState} </h1>
    <h2>Product Title: {productState?.title}</h2>
    <p>Price: ${productState?.price}</p>
  </div>

    </div>
  )
}

export default Maths
