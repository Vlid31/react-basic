import Wrapper from './components/Wrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Русские вперёд</h2>
        <button>Пожмакай меня</button>
      </Wrapper>
      <Wrapper color="lightyellow">
        <h2>Русские вперёд</h2>
        <p>Введите данные своей дебетовой карты</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
