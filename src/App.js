import { version, Component } from "inferno";
import "./registerServiceWorker";
import Logo from "./logo";
import styled from "styled-components";
import "./App.css";

const Test = styled.div`
  border: 1px solid pink;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width="80" height="80" />
          <h1>{`Welcome to Inferno ${version}`}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test />
      </div>
    );
  }
}

export default App;
