// We use useRef in React to:
// Access DOM elements directly (like focusing an input).
// Store mutable values that don’t cause a re-render when changed (like a counter or previous value).

// Why useRef?
// We don’t want to re-render the component. 
// We just want to grab the DOM node (input) and do something with it (focus() in this case). useRef gives us that power.
//Use useRef instead of document.getElementById in React because it's safe, reliable, and works with React’s lifecycle.


import React, { useEffect, useRef } from 'react'

const UsingRef = () => {
    const inputRef = useRef(null);

    const handleRef = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        const normalInput = document.getElementById('abc');
        console.log('naldfnalsdifa', normalInput)
        normalInput && normalInput.focus();

    }, [])//empty dependency means the function will run only once after the initial render

  return (
   <div>
    <input id = "abc" placeholder='click button to focus on input'/>
    
    <input ref={inputRef} id="abcd"  placeholder='click button to focus on input'/>
    <button onClick = {handleRef}>Use Ref</button>
   </div>
  )
}

export default UsingRef

