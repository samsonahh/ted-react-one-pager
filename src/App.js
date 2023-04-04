import component from "./assets/component.png"
import componentprops from "./assets/componentprops.png"
import componentuse from "./assets/componentuse.png"
import reactcreateelement from "./assets/reactcreateelement.png"
import usestate from "./assets/usestate.png"
import reactJSX from "./assets/reactJSX.png"

import {useState} from 'react'

function Title(){
  const styleObj={
    fontSize: 72
  }
  return(
    <>
    <h1 style={styleObj}>React One Pager</h1>
    <h1>Hui Wang and Samson Wu</h1>
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

    <li>React is a Javascript library for developing front end UI.</li>
    <li>React is useful because it only changes what needs to be changed. This makes development a lot faster.</li>

    <h2>React Setup:</h2>
    <li>Install Node.js using: sudo apt install nodejs</li>
    <li>Install npm using: sudo apt install npm</li>
    <li>Create your React app in your directory using: npx create-react-app [PATH]</li>
    <li>Start the development environment using: npm start</li>
    <li>Start building your app by editing src/App.js</li>

    <h2>HTML Syntax in JavaScript using JSX:</h2>
    <li>JSX allows us to code in HTML despite being in JavaScript</li>
    <li>JSX syntax is much friendlier to us because we are familiar with HTML</li>
    <li>With JSX:</li>
    <img src={reactJSX}></img>
    <li>Without JSX:</li>
    <img src={reactcreateelement}></img>

    <h2>React Component:</h2>
    <li>A component is very similar to an HTML element tag but can have multiple components or other elements in it.</li>
    <li>A component can be defined using a function.</li>
    <li>This is the syntax for a very basic React component:</li>
    <img src={component}></img>
    <li>The Title component can be reused multiple times</li>
    <li>You can also pass properties into your components:</li>
    <img src={componentprops}></img>
    
    <h2>Using the component:</h2>
    <li>You can use the component like a standard HTML element</li>
    <li>You would put something like this inside the App component:</li>
    <img src={componentuse}></img>
    <li>The above code would show up on the page like:</li>
    <h1>This is bigmama</h1>

    <h2>React Hooks (useState):</h2>
    <h3>Below is an example of a component that uses useState</h3>
    <Counter />
    <br></br>
    <li>If you try creating a constant variable "count", you wouldn't be able to increment/decrement it using the buttons</li>
    <li>The workaround for this is with useState</li>
    <li>You need to import {"{useState}"} from 'react' first</li>
    <li>Here is the source for the counter above:</li>
    <img src={usestate}></img>
    <br></br>
    <a href="https://react.dev/learn"><h1>Much more from the React Documentation</h1></a>
    </>
  );
}

export default App;
