import logo from './logo.svg';
import './App.css';
import React, {Suspense} from 'react';
import Maths from './Redux Practice/Maths';
import usingRef from './useRef/usingRef';

const MyComponent = React.lazy(() => import('./MyComponent'))

function App() {
  return (
    <div className="App">
      
      <Suspense fallback={<div>loading....</div>}>
      {/* <MyComponent /> */}
      <Maths />
      <usingRef />
      </Suspense>
    </div>
  );
}

export default App;
