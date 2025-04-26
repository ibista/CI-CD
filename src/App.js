import './App.css';
import React, {Suspense} from 'react';
import Maths from './Redux Practice/Maths';
import Register from './register';

// const MyComponent = React.lazy(() => import('./MyComponent'))

function App() {
  return (
    <div className="App">
      
      <Suspense fallback={<div>loading....</div>}>
      {/* <MyComponent /> */}
      <Maths />
      <Register />
      </Suspense>
    </div>
  );
}

export default App;
