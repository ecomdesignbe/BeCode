import logo from './logo.svg';
import './new.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>

      <main className="App-main">
        <div>
          <input type="text" placeholder="Type a new todo"></input> &nbsp;
        </div>
        
        <div>
          <input type="submit" value="Add Todo"></input>
        </div>

        <hr></hr>
        
        <h2>Todos </h2>
        
        <div>
          <input type="checkbox" id="learn-react" name="learn-react" />
          <label for="learn-react"> Learn React</label>
        </div>
        <div>
          <input type="checkbox" id="be-awesome" name="be-awesome" />
          <label for="be-awesome"> Be Awesome !</label>
        </div>
      </main>
      
      <footer className="App-footer">
        <p align="center">2024 Learn React - Make a Todo App</p>
      </footer>
    </div>
  )
}

/* Original template npx create-react-app .
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @ BeCode
        </a>
      </header>
    </div>
  );
}
*/


export default App;
