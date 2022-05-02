import "./App.css";
import Suggestion from "./components/Suggestion";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header headerText="Bored?"></Header>
      <h2>Press one of the buttons to get a suggestion on what to do</h2>
      <Suggestion></Suggestion>
    </div>
  );
}

export default App;
