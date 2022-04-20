import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <h1>Bored?</h1>
      <h2>Press the button to get a suggestion on what to do</h2>
      <Button buttonText="I'm bored"></Button>
    </div>
  );
}

export default App;
