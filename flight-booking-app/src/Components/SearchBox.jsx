
import { Input, Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShowFlights from "../Pages/ShowFlights";


export default function SearchBox() {
    const [searchData,setSearchData] = useState({
        startCity:'',
        endCity:'',
        date:''
    })
    

    // useEffect(()=>{

    // },[])

    const handleChange=(e)=>{    
        const {name,value} = e.target
        setSearchData({...searchData,[name]:value})
        console.log(searchData)

    }
    const handleSubmit=()=>{
        console.log(searchData,'llllll')
        ShowFlights(searchData)
      
    }
    console.log(searchData)

  return (
    <div style={{ backgroundRepeat: 'no-repeat', padding:'28px',  backgroundSize: 'cover',height:'340px', backgroundImage:'url("https://forever.travel-assets.com/flex/flexmanager/images/2021/06/25/TVLY_SeizeYourSomeday_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=600&h=150&q=medium")'}}>
        <div style={{width:'80%' ,margin:'auto' ,backgroundColor:'white', padding:'20px',  }}>
            <Heading>Search Flight</Heading>
            <br />
            <Input type="text" name="startCity" id="" onChange={handleChange} placeholder={'From'}/>
            <Input type="text" name="endCity" id="" onChange={handleChange} placeholder={'To'}/>
            <select style={{width:'50%',border:'1px solid gray', padding:'5px'  }} name="date" id="" onChange={handleChange}>
                {/* <option value="">Select Date</option> */}
                <option value="2014-05-23">23 May</option>
                <option value="2014-05-24">24 May</option>
            </select>
            <br />
            <br />
        <Button style={{backgroundColor:'darkblue',color:'white'}} onClick={handleSubmit} type='submit'>
            <Link to='/flights'>Submit</Link>
        </Button>
        </div>
    </div>
    
  )
}