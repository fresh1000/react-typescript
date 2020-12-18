import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld/>
      </header>
    </div>
  );
}

function HelloWorld(): JSX.Element {
  return <h1>Hello World</h1>;
}

export default App;
