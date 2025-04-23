import React from 'react'

const counterReducer = (state=0, action) => {

  if (!action || !action.type) {
    console.error('Action is undefined or malformed:', action);
    return state;
  }

  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    
    case 'DECREMENT':
      return state-1;

    case 'RESET':
      return 0;

    case "SET_VALUE":
      return action.payload; 

      default:
        return state;
  }
}

export default counterReducer;
