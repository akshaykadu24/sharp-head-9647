import { Heading, Img, Skeleton, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getdata } from "../Components/api"

function ShowFlights(searchData){
    console.log(searchData)

    const [searchedData,setSearchedData] = useState({})
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    console.log(searchData,'kkk')
    // console.log(searchedData)
    const hii=(searchData)=>{
            // setSearchedData(searchData)

    }
    useEffect(()=>{
        console.log(searchData,'1')
        setSearchedData(searchData)
        console.log(searchData)
    },[])
    console.log(searchData)
    
    const handleGetData=()=>{
        setLoading(true)
        getdata(searchedData).then((res)=>{ 
            setData(res.data)
        
        }).catch((err)=>console.log(err))
        .finally(()=>{console.log('fully run')
        setLoading(false)
        })
    }
   
    useEffect(()=>{
        handleGetData()
    },[])
   
    console.log(data)

    const convertTime=(time)=>{
        let value
        time = time.split(':')
        time[0]<=12? value = time[0]+':'+time[1]+' '+'AM': value = (time[0]-12)+':'+time[1]+' '+'PM'
        return value
    }

  
    if(loading)return  <div>
        <br />
    <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        
    </Stack> 
    <br />
    <Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
    </Stack>

</div> 
   console.log(data)
    return(
        <div style={{width:'75%'}}>
            <Heading>Flights</Heading>
            {
                data?.map((el,index)=>{ 
                    return <div key={index} style={{display:'flex',justifyContent:'space-around'}}>
                            <div >
                                <h2>{convertTime(el.ScheduledArrivalTime)} - {convertTime(el.ScheduledDepartureTime)} </h2>
                                <div> {el.DepartureAirport} - {el.ArrivalAirport}</div>
                                    
                            </div>
                            <div  style={{display:'flex',justifyContent:'flex-start'}}>
                                <Img style={{width:'25%'}} src={el.flightIcon}/> &nbsp;
                                <p style={{ marginTop:'17px'}}>{el.flightType}</p>
                            </div>
                            <div>
                                <h1>₹ {el.price}</h1>
                                <p>One way per Traveler</p>
                            </div>

                         </div>
                })
            }
        </div>
    )
}
export default ShowFlights