import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={7} hasPet/>
      <PetInfo animal="pig" age={5} hasPet/>
    </div>
  );
}

export default App;
