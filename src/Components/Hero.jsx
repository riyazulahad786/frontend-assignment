import {} from 'react'
import Navbar from '../Components/Navbar'
function Hero() {
  return (
    <>
       <Navbar/>
   
    <div className='hero_section d-flex flex-column justify-content-center align-items-center'>
       
        <div className=''>
            <h1>My Subscriptions</h1>
            <h6 className='text-center'>Your go-to Movie Membership program</h6>
        </div>
    </div>
    </>
  )
}

export default Hero