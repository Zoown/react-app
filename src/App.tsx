// React Rules
//  1. Functions cannot return multiple elements (ONLY 1) {WORKAROUND: Wrap all elements inside a <div> element or something else}
//  2. Hooks are component-based (All components has their own states, so you can make copies of same component that each keeps their own state)
//  3. Props are parameters, can destructure if only interested in specific data inside the whole prop (Exmple if interested only in var a, put this in parameter for a function) --- {var a}: Props
//  4. Benefit of prop destructuring is you skip having to use the additional scope example var a inside props can just use a.data instead of props.a.data
//  5. Treat props as inmutable(Read-only), conventional coding. (if you need to change something, make it a state because it needs the DOM updating functionality)
//  6. States are like using local function variables.
//  7.
//  8.
//  9.
// 10.

// Shortcuts
// CTRL+D will create multiple cursors that matches the string you have selected (Good for changing many identical strings)

// JSX Rules
//  1. Does not have for loops
//  2. Can only contain HTML or react components (Cannot render dynamically like items.map(item => ))
//  3.
//  4.
//  5.
//  6.
//  7.
//  8.
//  9.
// 10.

/*
  //Default downloaded code template from vite
  //import { useState } from 'react'
  //import reactLogo from './assets/react.svg'
  //import './App.css'
  //
  //function App() {
  //  const [count, setCount] = useState(0)
  //
  //  return (
  //    <div className="App">
  //      <div>
  //        <a href="https://vitejs.dev" target="_blank">
  //          <img src="/vite.svg" className="logo" alt="Vite logo" />
  //        </a>
  //        <a href="https://reactjs.org" target="_blank">
  //          <img src={reactLogo} className="logo react" alt="React logo" />
  //        </a>
  //      </div>
  //      <h1>Vite + React</h1>
  //      <div className="card">
  //        <button onClick={() => setCount((count) => count + 1)}>
  //          count is {count}
  //        </button>
  //        <p>
  //          Edit <code>src/App.tsx</code> and save to test HMR
  //        </p>
  //      </div>
  //      <p className="read-the-docs">
  //        Click on the Vite and React logos to learn more
  //      </p>
  //    </div>
  //  )
  //}
  //
  //export default App
*/

import ListGroup from "./components/ListGroup";

function handleSelectCity(item: string) {
  console.log(item);
}

function App() {
  //const handleSelectCity = (item: string) => { console.log(item) };

  return (
    <div>
      <ListGroup
        items={["City A", "City B", "City C", "City D", "City E"]}
        heading="Cities"
        onSelectItem={handleSelectCity}
      />
    </div>
  );
}

export default App;
