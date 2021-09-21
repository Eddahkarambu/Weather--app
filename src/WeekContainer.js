import React from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component{
    state={
        dailyData:[],
        degreeType: "fahrenheit"

    }
   

        componentDidMount = () =>{
            const weatherURL=
            'https://butterfly-cors.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=c2df072d1be94685bda115343212109&q=Nairobi&days=3&aqi=no&alerts=no'
            fetch(weatherURL ,{
                crossDomain:true,
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }

            })
            
            .then(res => res.json())
            .then(data => {
                const dailyData=data.forecast.forecastday.map(forecast=> forecast.hour.filter(hour=>hour.time.includes("13:00")))

                console.log(dailyData, 'da')
                this.setState({
                    dailyData:dailyData
                },() =>console.log(this.state))
                })
            }


            formatDayCards =()=>{
                return this.state.dailyData.map((reading,index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index}/>)
            }


            updateForecastDegree= event=>{
                this.setState({
                    degreeType:event.target.value
                },() => console.log(this.state))
            }


            render(){
            return(
                <div className="container">
                    
                    <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                    <h5 className="display-5 text-muted">Kenya</h5>
                    <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
                    <div className="row justify-content-center">
                    

                    {this.formatDayCards()}

                    </div>

                </div>
                
                 
                
            )

        }    
       
    }




export  default WeekContainer ;