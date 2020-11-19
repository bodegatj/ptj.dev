import * as React from 'react';
import './style.scss';

console.log('Hello from tsx!')

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to my website!</p>
        </header>
        <body>

        </body>
        <footer>
          <a href="https://support.eji.org/give/153413/#!/donation/checkout">BLM</a>
        </footer>
      </div>
    );
  }
}

export default App;