import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import { apidata } from "../Components/api"
import Login from "./Login"


function Register(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        
    })

    const handleChange=(e)=>{
        const {value,name} = e.target
        let val = {...formData,[name]:value} 
        setFormData(val)
      
    }
    console.log(formData)
    const handleSubmit=()=>{
        apidata(formData)
        // .then((res)=>{console.log(res.json())})
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    }

    return(
        <div>
            <Input onChange={handleChange} type="text" name="name" id="" placeholder="Name" />
            <Input onChange={handleChange} type="email" name="email" id="" placeholder="Email"  />
            <Input onChange={handleChange} type="text" name="password" id="" placeholder="Password" />
            <Button onClick={handleSubmit} >Register</Button>
        </div>

    )
}   
export default Register