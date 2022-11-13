import { Heading, Text } from "@chakra-ui/react";

function HomeItems(){
  
   
    return(
        <div style={{marginTop:'100px'}}>
            <div style={{ width:'85%', margin:'auto', display:'flex', justifyContent:'space-evenly'}}>
                <div style={{ width:'30%', height:'170px',borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium')"}}>
                    <div  >
                        <Heading display='flex' as='h1' size='md' color='white'   marginTop={'140px'}>
                           Find the Perfect Trip
                        </Heading>
                        
                    </div>
                    <div style={{backgroundColor:'wheat'}}>
                        <Text marginTop={'15px'}  fontSize={'0.75rem'} >The entire crew deserves an unforgettable vacation. When searching for the Texterfect accommodations, use the family-friendly badge to discover hotels that provide extra amenities for kids. Additionally,</Text>
                    </div>
                </div>
                <div style={{width:'30%', height:'170px',borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium')"}}>
                    
                    <div>
                        <Heading display='flex'  as='h1' size='md'color='white'  marginTop={'140px'}>
                            Book Flexibility
                        </Heading> 
                    
                    </div>
                    <div style={{backgroundColor:'wheat'}}>
                        <Text marginTop={'15px'}  fontSize={'0.75rem'} >The entire crew deserves an unforgettable vacation. When searching for the Texterfect accommodations, use the family-friendly badge to discover hotels that provide extra amenities for kids. Additionally,</Text>
                    </div>     
                </div>
                <div style={{width:'30%', height:'170px',borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=600&h=257&q=medium')"}}>
                    <div>
                        <Heading display='flex' as='h1' size='md'color='white'   marginTop={'140px'}>
                            We've got your back
                        </Heading>
                    </div>
                    <div style={{backgroundColor:'wheat'}}>
                        <Text marginTop={'15px'} fontSize={'0.75rem'} >The entire crew deserves an unforgettable vacation. When searching for the Texterfect accommodations, use the family-friendly badge to discover hotels that provide extra amenities for kids. Additionally,</Text>
                    </div> 
                </div>
            </div>
            {/*  */}
            
            <div style={{ height:'100px' ,display:'flex' ,justifyContent:'space-evenly' ,width:'90%' , margin:'auto',marginTop:'100px'}}>
                
            <div style={{width:'22%', height:'170px', borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh')"}}>
                <div>
                    <Heading as='h1' size='lg' color='white'   marginTop={'100px'}>
                        Sunny beach hotel offers    
                    </Heading>
                </div>
            </div>
            <div style={{width:'22%', height:'170px', borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh')"}}>

                <div>
                    <Heading as='h1' size='lg'color='white'  marginTop={'100px'}>
                        Enjoying Tour 
                    </Heading>
                </div>
            </div>
            <div style={{width:'22%', height:'170px', borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh')"}}>
                <div>
                    <Heading as='h1' size='lg' color='white'   marginTop={'100px'}>
                        Member discounts
                    </Heading>
                </div>
            </div>
            <div style={{width:'22%', height:'170px', borderRadius:'4%', backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundImage: "url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh')"}}>

                <div>
                    <Heading as='h1' size='lg'color='white'  marginTop={'100px'}>
                        Vacation rentel offers
                    </Heading>
                </div>
            </div>
                

            </div>
            
        </div>
    )
}
export default HomeItems