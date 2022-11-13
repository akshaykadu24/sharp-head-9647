import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "./Login";
import Register from "./Register";
import ShowFlights from "./ShowFlights";

function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/flights" element={<ShowFlights />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}
export default AllRoutes