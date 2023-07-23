
//Image Imports
import homeLogo from '../assets/homeLogo.png'
import team from '../assets/team.jpg'

//React Imports
import { useState } from 'react'


const Home = () => {

  const[dropdown, setDropDown] = useState(false)

  const handleDropDown =()=>{
    setDropDown(!dropdown)
  }

  return (
    <div
    className='z-0 relative h-full w-full  flex  transition-all ease-in-out duration-300 delay-75'
    id='home' name='home'>
        
        <img className='object-cover h-screen w-full ' src={team} alt="bodyImage" /> 
    
        <div className='absolute w-full'>
          <div className=' flex justify-around mt-8'> 
              <img className='hover:scale-[1.2]  transition-all ease-in-out duration-300 delay-75' src={homeLogo} alt="logo" />

              <div className=' hidden md:flex md:font-bold md:text-lg text-white md:uppercase md:underline md:underline-offset-8  md:gap-14  '> 
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic'  href="#history"><p>01.History </p></a>
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic' href="#team"><p>02.Team</p></a>
              </div>

              {!dropdown &&
              (
                <div onClick={handleDropDown} className='visible absolute z-50 transform transition duration-300 hover:cursor-pointer
                top-0 left-0 w-[30%] h-[100px] border-r border-r-gray-900 bg-gray-400 rounded-br-full
                flex items-center flex-col  gap-11 text-5xl 
                                    md:hidden '> 
                  <p className='mt-6'>{'=>'}</p>
               </div>
              )}

              {dropdown &&
              (
                <div onClick={handleDropDown} className='visible absolute z-50 transform transition duration-300 hover:cursor-pointer
                top-0 left-0 w-[30%] h-[320px] border-r border-r-gray-900 bg-gray-400 rounded-br-full
                flex items-center flex-col  gap-7 text-2xl font-bold
                                    md:hidden '> 
                    <p className='mt-6'>{'=>'}</p>
                    <a className=' hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic'  href="#history"><p>01.History </p></a>
                    <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic' href="#team"><p>02.Team</p></a>
                </div>
              )}

              
          </div>

          <div className='gap-2  text-6xl font-black mt-48 absolute w-full h-full flex justify-center items-center'>
            <h1>LOS ANGELES <br /> <span className='text-blue-900'>MOUNTAINS</span></h1>
          </div>

      </div>


   
    </div>
  )
}

export default Home 
