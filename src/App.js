import logo from './logo.svg';
import React from "react";
import './App.css';
import { WiDayCloudyHigh,WiDaySunny,WiCloud, WiCloudy} from "react-icons/wi";


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

      <div className="all">

        <div className="one">
        <div className="sunday">Sunday</div>
        <div> sept 12th, 1:00pm</div>
        <WiDaySunny size={40}/>
        <div className="degrees"> 3°C</div>
        <div>light rain</div>
        </div>
       

        <div className="one">
        <div className="Monday">Monday</div>
        <div> sept 13th, 1:00pm</div>
        <WiDayCloudyHigh size={40}/>
        <div className="degrees"> 4°C</div>
        <div>few clouds</div>
        </div>
        
        
        
        <div className="one">
        <div className="Tuesday">Tuesday</div>
        <div> sept 14th, 1:00pm</div>
        <WiCloud size={40}/>
        <div className="degrees"> 2°C</div>
        <div>broken clouds</div>
        </div>
        
       
        
        <div className="one">
        <div className="Wednesday">Wednesday</div>
        <div> sept 12th, 1:00pm</div>
        <WiDayCloudyHigh size={40}/>
        <div className="degrees"> 10°C</div>
        <div >sunny</div>
        </div>
     
        
        <div className="one">
        <div className="Thursday">Thursday</div>
        <div> sept 12th, 1:00pm</div>
        <WiCloudy size={40}/>
        <div className="degrees"> -4°C</div>
        <div>few clouds</div>
        </div>
      
      </div>


    </div>
  );
}

export default App;
