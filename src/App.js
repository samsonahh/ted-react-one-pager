import component from "./assets/component.png"
import componentprops from "./assets/componentprops.png"
import componentuse from "./assets/componentuse.png"
import reactcreateelement from "./assets/reactcreateelement.png"
import reactJSX from "./assets/reactJSX.png"

import {useState} from 'react'

function Title(){
  return(
    <>
    <h1>React One Pager</h1>
    <h4>Hui Wang and Samson Wu</h4>
    </>
  );
}

function Counter(){
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return(
    <>
      <button onClick={increase}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </>
  );
}

function App() {
  return (
    <>
    <Title />

    <h3>React is a Javascript library for developing front end UI.</h3>
    <li>React is useful because it only changes what needs to be changed. This makes development a lot faster.</li>

    <h2>React Setup:</h2>
    <li>Install Node.js using: sudo apt install nodejs</li>
    <li>Create your React app in your directory using: npm create-react-app [PATH]</li>
    <li>Start building your app by editing src/App.js</li>

    <h2>HTML Syntax in JavaScript using JSX:</h2>
    <li>JSX allows us to code in HTML despite being in JavaScript</li>
    <li>JSX syntax is friendlier to the developer</li>
    <li>With JSX <img src={reactJSX}></img></li>
    <li>Without JSX <img src={reactcreateelement}></img></li>

    <h2>React Component:</h2>
    <img src={component}></img>
    <li>This is the syntax for a very basic React component</li>
    <li>The Title component can be reused multiple times</li>
    <li>You can also pass properties into your components</li>
    <img src={componentprops}></img>
    <h3>You can use the component like a standard HTML element</h3>
    <img src={componentuse}></img>
    <li>Writing the above would show as</li>
    <h1>This is bigmama</h1>

    <h2>React Hooks (useState):</h2>
    <h3>Below is an example of a component that uses useState</h3>
    <Counter />
    <li>If you try creating a constant variable "count", you wouldn't be able to increment/decrement it using the buttons</li>
    <li>The workaround for this is with useState</li>
    </>
  );
}

export default App;
