
//Image Imports
import homeLogo from '../assets/homeLogo.png'
import team from '../assets/team.jpg'


const Home = () => {
  return (
    <div
    className='z-0 relative h-full w-full  flex  transition-all ease-in-out duration-300 delay-75'
    id='home' name='home'>
        
        <img className='object-cover h-screen w-full ' src={team} alt="bodyImage" /> 
    
        <div className='absolute w-full'>
          <div className=' flex justify-around mt-8'> 
              <img className='hover:scale-[1.2]  transition-all ease-in-out duration-300 delay-75' src={homeLogo} alt="logo" />

              <div className=' flex font-bold text-lg text-white uppercase underline underline-offset-8  gap-14  '> 
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic'  href="#history"><p>01.History </p></a>
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic' href="#team"><p>02.Team</p></a>
            </div>
          </div>

          <div className='gap-2  text-6xl font-black mt-48 absolute w-full h-full flex justify-center items-center'>
            <h1>LOS ANGELES <br /> <span className='text-blue-900'>MOUNTAINS</span></h1>
          </div>

      </div>


   
    </div>
  )
}

export default Home 
