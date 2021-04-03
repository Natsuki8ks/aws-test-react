import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://ap-northeast-1.console.aws.amazon.com/console/home?region=ap-northeast-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello AWS
        </a>
      </header>
    </div>
  );
}

export default App;
