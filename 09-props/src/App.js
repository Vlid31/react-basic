import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={7} isHappy={true}/>
      <PetInfo animal="pig" age={5} isHappy={false}/>
    </div>
  );
};

export default App;
