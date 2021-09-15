import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="Days"> 5 days Forecast
      </div>

      <div className="kenya">
      <div className="country">Kenya
      </div>

      <div className="buttons">
      <button >Celcius</button>
      <button>Farenheit</button>
      </div>
      </div>

      <div className="dow">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
      </div>

      <div className="dates">
        <div>sunday, 1;00pm</div>
        <div>Monday, 1;00pm</div>
        <div>Tuesday, 1;00pm</div>
        <div>Wednesday, 1;00pm</div>
        <div>Thursday, 1;00pm</div>
      </div>
    </div>
  );
}

export default App;
