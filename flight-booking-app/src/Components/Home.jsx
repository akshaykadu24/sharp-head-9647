import { Img } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import getdata from "./api"
import HomeItems from "./HomeItems"
import SearchBox from "./SearchBox"

function Home(){

   
   
    return(
        <div>
            <SearchBox />
            <HomeItems/>
            <Img margin='auto' marginTop='120px' marginBottom='-60px' src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg" alt="" />
            <HomeItems/>
        </div>
    )
}
export default Home