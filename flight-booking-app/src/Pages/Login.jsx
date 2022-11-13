import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"

function Login(){
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const {value,name} = e.target
        let val = {...formData,[name]:value} 
        setFormData(val)
      
    }
    console.log(formData)
    const handleSubmit=()=>{

    }

    return(
        <div>
            <Input onChange={handleChange} type="email" name="email" id="" placeholder="Email"  />
            <Input onChange={handleChange} type="text" name="password" id="" placeholder="Password" />
            <Button onClick={handleSubmit} >Register</Button>
        </div>

    )
}
export default Login