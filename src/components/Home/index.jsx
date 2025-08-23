import './index.css'
import {useNavigate} from "react-router"

const Home=()=>{
  const navigate=useNavigate()
  const exploreMoreBtn=()=>{
      navigate("/skills", {replace:true})
  }
    return(
   <>
   <div className='container1'>
    <div className='home-container'>
            <div className='home-description'>
          <h1 className='home-container-h1'>Hii I'm Nandini Erra</h1>
            <p className='home-container-p'>Aspiring MERN developer, First-year at NIAT, Falling in love with tech, exploring infinite possibilities with code and creativity.</p>
            <button onClick={exploreMoreBtn}>Explore More</button>
            </div>
            <img src='https://res.cloudinary.com/doicvqkvb/image/upload/v1750734277/portfolio_profile_bf7e4c.jpg' />
    </div>
   </div>
   </>


)
}
export default Home
