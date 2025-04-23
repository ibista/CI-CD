import React from 'react'

const initialState = {
    value: null,
    loading: false,
    error: ''
}

const productReducer = (state = initialState, action)  => {
    switch(action.type){
        case 'SET_VALUE_FROM_API':
            return action.payload;
            
        default:
        return state;
    }
}

export default productReducer
