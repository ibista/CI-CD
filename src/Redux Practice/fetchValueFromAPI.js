//https://dummyjson.com/products/1

import React from 'react'
 const fetchValueFromAPI = () => {

    return async(dispatch) => {
        const res = await fetch('https://dummyjson.com/products/1');
        const data = await res.json();
        console.log("Check Data", data);
        dispatch({type: 'SET_VALUE_FROM_API', payload: data}) //dispatched the type and payload to reducer
    }
}

export default fetchValueFromAPI;