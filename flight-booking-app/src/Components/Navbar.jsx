import { Heading } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
function Navbar(){
    return(
        <div  style={{display:'flex', justifyContent:'space-around', backgroundColor:'#1f65c4'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <img style={{width:'80px'}} src={logo} alt="" /> &nbsp; &nbsp; &nbsp;
            <Heading marginTop='10px' style={{color:'white', textShadow:'1px 1px 1px black'}}>TRAVEL EASY</Heading>

            </div>
            <div  style={{display:'flex', justifyContent:'space-between'}}>
                <Heading size={'lg'} marginTop='10px' style={{color:'white'}} ><NavLink to="/login">Login</NavLink></Heading> &nbsp; &nbsp; &nbsp; &nbsp;
                <Heading size={'lg'} marginTop='10px' style={{color:'white'}} ><NavLink to="/register">Register</NavLink></Heading>
            </div>
        </div>
    )
}
export default Navbar