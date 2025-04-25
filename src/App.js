import './App.css';
import React, {Suspense} from 'react';
import Maths from './Redux Practice/Maths';

// const MyComponent = React.lazy(() => import('./MyComponent'))

function App() {
  return (
    <div className="App">
      
      <Suspense fallback={<div>loading....</div>}>
      {/* <MyComponent /> */}
      <Maths />
      </Suspense>
    </div>
  );
}

export default App;
