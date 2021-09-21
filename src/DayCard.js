import React from 'react';
import moment from 'moment';


const DayCard =({reading, degreeType})=>{
    console.log(degreeType)
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const fahrenheit=Math.round(reading[0].temp_f)
    const celsius = Math.round((fahrenheit-32)*5/9)

    

    return(
        <div className="col-sm-2">
            <div className="card">
            <h3 className="card-title">{moment(reading[0].time).format('dddd')}</h3>
            <p className="text-muted">{moment(reading[0].time).format('MMMM Do, h:mm a')}</p>
            <img src={reading[0].condition.icon}/>
            <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
            <div className="card-body">
                <p className="card-text">{reading[0].condition.text}</p>
                

            </div>

            </div>

        </div>
    )
}
export default DayCard;