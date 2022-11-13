import axios from 'axios'
export const getdata=(searchData)=>{
    // const {startCity,endCity,date} = searchData
    console.log(searchData)
    return axios({
        method:'get',
        url:'/flight',
        baseURL:'http://localhost:8000',
        // params:{
        //     DepartureAirport: startCity,
        //     ArrivalAirport: endCity,
        //     ScheduledDepartureDate: date
        // }
    })
}


export const apidata=({email,name,password})=>{
    console.log(email,name,password)
     axios.post("http://localhost:8000/Users",{
            name:'vipin',
            email:'vipin@gamil.com',
            passowrd:'vipin',
        
    })
}
