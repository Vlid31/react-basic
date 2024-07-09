import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* CSS rule from the Info CSS module doesn't work here */}
      <Info />
      <h1>App component heading</h1>
      <h2>Heading in the App component</h2>
      <button className="my-button">App component button</button>
    </div>
  );
}

export default App;


// РАЗДЕЛ 27