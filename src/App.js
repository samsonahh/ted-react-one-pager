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

    <li>React is an open-source Javascript library for developing front end UI created by Facebook in 2011.</li>
    <li>React is useful because it only changes what needs to be changed. This makes development a lot faster.</li>
    
    <h2>ReactJS vs Vanilla Javascript:</h2>
    <li>Working with a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> on large apps can be difficult to manage in normal JS</li>
    <li>With React, you don't need to worry about querying and updating <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> elements and instead, build a webpage using reusable components</li>
    
    <h2>How React works:</h2>
    <li>React takes the component trees that we make and creates a virtual <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a>.</li>
    <li>When you make a change, React compares the current virtual <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> with the previous virtual <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> to see what changed.</li>
    <li>ReactDOM updates the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> and renders the component tree inside the element with the id, "root".</li>
  
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
    <img src={reactJSX} alt="ReactJSX"></img>
    <li>Without JSX:</li>
    <img src={reactcreateelement} alt="ReactNoJSX"></img>

    <h2>React Component:</h2>
    <li>A component is very similar to an HTML element tag but can have multiple components or other elements in it.</li>
    <li>A component can be defined using a function.</li>
    <li>The function can only return one element so you can enclose everything in fragments: '<></>'</li>
    <li>This is the syntax for a very basic React component:</li>
    <img src={component} alt="ReactComponent"></img>
    <li>The Title component can be reused multiple times</li>
    <li>You can also pass properties into your components:</li>
    <img src={componentprops} alt="ReactComponentProps"></img>
    <li>'export default [ComponentName]' on the bottom of the file so that the component can be used elsewhere if your component is in a separate js file (you would have to import it in App.js).</li>
    
    <h2>Using the component:</h2>
    <li>You can use the component like a standard HTML element</li>
    <li>You would put something like this inside the App component:</li>
    <img src={componentuse} alt="ComponentUse"></img>
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
    <img src={usestate} alt="UseState"></img>
    <br></br>
    <a href="https://react.dev/learn"><h1>Much more from the React Documentation</h1></a>
    </>
  );
}

export default App;
