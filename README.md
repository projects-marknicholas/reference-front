# Front-End (React) Documentation

### Step by step on how to run React JS
1. Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server-side. React.js relies on Node.js and npm (Node Package Manager) for development. Follow these steps to install Node.js:

- Go to the official [Node.js](https://nodejs.org/en) website.
- Download the latest version of Node.js for your operating system (Windows, macOS, or Linux).
- Follow the installation instructions provided by the installer.
- Once installed, you can verify the installation by opening a terminal or command prompt and running the following commands:
    ```
    npm -v
    ```

2. ##### Create React App

    Create React App is a tool that sets up a new React.js project with a modern build setup. It offers a pre-configured development environment with webpack, Babel, and other tools to help you start building React applications quickly. Follow these steps to create a new React app:

    - Open a terminal or command prompt.
    - Navigate to the directory where you want to create your React app.
    - Run the following command to create a new React app named `my-app`
    ```
    npx create-react-app my-app
    ```
    - Wait for the installation to complete. This may take a few minutes as Create React App sets up the project and installs dependencies.
    - Once the installation is finished, navigate into the newly created directory:
    ```
    cd my-app
    ```

3. Run the React App
Now that you've created a new React app, you can run it locally on your development machine. Follow these steps to start the development server:

- In the terminal or command prompt, make sure you're inside your React app directory (e.g., my-app).
- Run the following command to start the development server:
```
npm start
```
This command will compile your React app, start the development server, and open your default web browser to view the app.

- You should see your React app running in the browser, typically at `http://localhost:3000`. Any changes you make to your code will automatically be reflected in the browser without needing to refresh the page.

---

# React Hooks Documentation

React Hooks were introduced in React 16.8 as a way to use stateful logic and side-effects in functional components. Before Hooks, such functionality was only available in class components. Hooks provide a more concise and readable way to manage state and lifecycle in functional components.

### Basic Hooks
React provides several built-in Hooks that cover common use cases. Here are some of the basic Hooks:

- `useState`: useState is a Hook that allows functional components to use state. It returns a stateful value and a function to update that value.
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- `useEffect`: useEffect is a Hook that allows you to perform side effects in functional components. It runs after every render and can be used for data fetching, subscriptions, or manually changing the DOM.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- Custom Hooks
In addition to the built-in Hooks, you can also create custom Hooks to reuse stateful logic across multiple components. Custom Hooks are JavaScript functions that use Hooks internally.

```jsx
import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
}

export default useCounter;
```
You can then use this custom Hook in your components:
```jsx
import React from 'react';
import useCounter from './useCounter';

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

#### Rules of Hooks
When working with Hooks, there are a few important rules to follow:

- Hooks should only be called at the top level of a functional component or custom Hook. Don't call Hooks inside loops, conditions, or nested functions.
- Hooks should only be called from functional components or custom Hooks. Don't call Hooks from regular JavaScript functions.
- Hooks should have the same order when called in every render of a component.

---

# React Components and React Router DOM

### Functional Components

Functional components are JavaScript functions that return React elements. They are simpler and easier to write than class components.

Example:

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

### Class Components

Class components are ES6 classes that extend from React.Component. They have additional features such as local state and lifecycle methods.

Example:

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;
```

### State and Props

- Props: Short for properties, props are read-only inputs passed to a component.
- State: A component's state is a JavaScript object that holds dynamic data and determines how the component renders and behaves.

Example: Using State and Props

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

--- 

## React Router DOM

### Installation

To use React Router DOM, you need to install it via npm or yarn.

Using npm:

```bash
npm install react-router-dom
```

Using yarn:

```bash
yarn add react-router-dom
```

### Basic Usage

Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

BrowserRouter, Switch, Route, and Link

- BrowserRouter: A router component that uses the HTML5 history API to keep your UI in sync with the URL.
- Switch: Renders the first child <Route> or <Redirect> that matches the location.
- Route: Renders a UI component based on the URL path.
- Link: A component for navigating to different routes.

### Nested Routes

Example:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';

function Topic({ match }) {
  return <h3>Requested Topic ID: {match.params.topicId}</h3>;
}

function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${path}/:topicId`} component={Topic} />
      <Route exact path={path}>
        <h3>Please select a topic.</h3>
      </Route>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

### Advance Routes Technique

Redirects

Example:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/old-path">
          <Redirect to="/new-path" />
        </Route>
        <Route path="/new-path">
          <NewComponent />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function NewComponent() {
  return <h2>New Component</h2>;
}

export default App;
```

---

## Conclusion

React components and React Router DOM are powerful tools for building dynamic, single-page applications with React. By understanding and using these tools, you can create complex, nested, and dynamic routing systems that enhance the user experience.


