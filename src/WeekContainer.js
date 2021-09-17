import React from 'react';
import apiConfig from './apiKeys';

class WeekContainer extends React.Component{
    state={
        fullData:[],
        dailyData:[]
    }
   

        componentDidMount = () =>{
            const weatherURL=
            'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7eff22e25433f5b9b8fe934eb8d1a7e7'


            fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData=data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData:data.list,
                    dailyData:dailyData
                },() =>console.log(this.state))
                })
            }


            formatDayCards =()=>{
                return this.state.dailyData.map((reading,index) => <DayCard reading={reading} key={index}/>)
            }


            render(){
            return(
                <div className="container">
                    <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                    <h5 className="display-5 text-muted">Kenya</h5>
                    <div className="row justify-content-center">

                    {this.formatDayCards()}

                    </div>

                </div>
                
                 
                
            )

        }    
       
    }




export  default WeekContainer ;