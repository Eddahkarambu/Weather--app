import React from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import moment from 'moment';

class WeekContainer extends React.Component{
    state={
        dailyData:[],
        degreeType: "fahrenheit",
        historyData:[]

    }
   

        componentDidMount = () =>{
            const forecastURL=
            `https://butterfly-cors.herokuapp.com/http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_MY_API_KEY}&q=Nairobi&days=3&aqi=no&alerts=no`
            fetch(forecastURL ,{
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
            
        
            
                const historyURL=
                `https://butterfly-cors.herokuapp.com/http://api.weatherapi.com/v1/history.json?key=${process.env.REACT_APP_MY_API_KEY}&q=Nairobi&dt=${moment().subtract(3,'d').format('YYYY-MM-DD')}&end_dt=${moment().subtract(1,'d').format('YYYY-MM-DD')}`

                fetch(historyURL ,{
                    crossDomain:true,
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                       }
    
                })
                
                .then(res => res.json())
                .then(data => {
                    const historyData=data.forecast.forecastday.map(forecast=> forecast.hour.filter(hour=>hour.time.includes("13:00")))
    
                    console.log(historyData, 'da')
                    this.setState({
                        historyData:historyData
                    },() =>console.log(this.state))
                    })
                
                }

            formatDayCards =()=>{
                return this.state.dailyData.map((reading,index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index}/>)
            }

            Cards =()=>{
                return this.state.historyData.map((reading,index) => <DayCard reading={reading} degreeType={this.state.degreeType} key={index}/>)
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
                    <h5 className="display-5 text-muted">Kenya, Nairobi</h5>
                    <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
                    <h2>forecast</h2>
                    <div className="row justify-content-center">
                    {this.formatDayCards()}
                    

                    </div>
                    <h2>history</h2>
                    <div className="row justify-content-center">
                    {this.Cards()}
                    

                    </div>

                </div>
                
                 
                
            )

        }    
       
    }




export  default WeekContainer ;