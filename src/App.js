import "./App.css";
import Suggestion from "./components/Suggestion";

function App() {
  return (
    <div className="App">
      <h1>Bored?</h1>
      <h2>Press the button to get a suggestion on what to do</h2>

      <Suggestion></Suggestion>
    </div>
  );
}

export default App;
