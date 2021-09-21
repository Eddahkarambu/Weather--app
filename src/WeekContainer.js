import React from 'react';

import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component{
    state={
        fullData:[],
        dailyData:[],
        degreeType: "fahrenheit"

    }
   

        componentDidMount = () =>{
            const weatherURL=
            'https://butterfly-cors.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=7eff22e25433f5b9b8fe934eb8d1a7e7'
            fetch(weatherURL ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }

            })
            
            .then(res => res.json())
            .then(data => {
                console.log(data, 'da')
                const dailyData=data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData:data.list,
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