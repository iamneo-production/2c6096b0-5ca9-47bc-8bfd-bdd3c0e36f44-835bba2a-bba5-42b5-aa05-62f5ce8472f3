import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './Weatherapp.css';

export default function Weatherapp() {

  const[data,setData]=useState({
    celcius:10,
    name:'London',
    humidity:10,
    speed: 2,
    image:'data:image/png;base64,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'
  })
  const [name,setName]=useState('');
 
  const [error,setError]=useState('');


  const handleClick=()=>{

     
    
    if(name !== ""){
      const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a6673e782011461b31f86f49a5d71adb&units=metric`;
      axios.get(apiUrl)
      .then(res=>{
        let imagePath='';
        
        if(res.data.weather[0].main=="Clouds"){
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK73xsvXugI2Vf_YqiUgxTPx_FyiE1v4tXQ&usqp=CAU"
        }else if(res.data.weather[0].main=="Clear"){
            imagePath="https://w7.pngwing.com/pngs/491/228/png-transparent-cartoon-cloud-animation-clouds-cartoon-blue-white-hand-thumbnail.png"
        }else if(res.data.weather[0].main=="Drizzle"){
          imagePath="https://img.freepik.com/premium-vector/weather-icon-sun-cloud-with-rain-rainy-weather-vector-illustration-isolated_615232-424.jpg"
        }else if(res.data.weather[0].main=="Mist"){
          imagePath="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWRnd0sKGUH5Dx9QSqEqWs7pqnJxJQnRZsND7KsaCqeWM7qPgxXDpXevfm5N5uF2VMuI&usqp=CAU"
        }else{
          imagePath="https://i.pinimg.com/736x/ff/47/6f/ff476f253a4695d1e499e1e96a5793c1.jpg"
        }
        setError('');
       
        console.log(res.data);
        setData({...data,celcius:res.data.main.temp, name:res.data.name, 
          humidity:res.data.main.humidity,speed:res.data.wind.speed,
        image:imagePath})
        
      })
      .catch(err=>{

        if(err.response.status==404){
            setError("Invalid City Name")
        }else{
           setError('');
        }
        console.log(err)
      
      });
    }
  }
  return (
    <div className='container'>
     <div className='weather'>
     <div className='search'>
     <input type="text" placeholder='Enter City Name' onChange={e => setName(e.target.value)}/>
     <button><img src="https://cdn-icons-png.flaticon.com/256/3917/3917132.png" onClick={handleClick}height="30px" width="30px" /></button>
     </div>
     <div className='error'>
     <p>{error}</p>
     </div>
     <div className='winfo'>
     <img src={data.image} width="170px"className='icon'/>
     <h1>{Math.round(data.celcius)}°c</h1>
     <h2>{data.name}</h2>
     <div className='details'>
        <div className='col'>
        <img src="https://static-00.iconduck.com/assets.00/humidity-icon-1024x838-vqbjj1sp.png" height="110px" width="200px"/>
        <div className='humidity'>
        <p>{Math.round(data.humidity)}%</p>
        <p>Humidity</p>
        </div>
        </div>
        <div className='col'>
        <img src="https://clipart-library.com/new_gallery/117-1176381_icon-free-download-animated-wind.png" height="110px" width="200px"/>
        <div className='wind'>
        <p>{Math.round(data.speed)} km/h</p>
        <p>Wind</p>
        </div>
        </div>
     </div>
     </div>
     </div>
</div>
)
}