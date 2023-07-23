//Image Imports
import home from '../assets/home.jpg'
import homeLogo from '../assets/homeLogo.png'

import history1 from '../assets/carouselAssets/history1.jpg'
import history2 from '../assets/carouselAssets/history2.jpg'
import history3 from '../assets/carouselAssets/history3.jpg'
import history4 from '../assets/carouselAssets/history4.jpg'

//React Imports
import { useState} from 'react'


const History = () => {

  //Carousel Data
  const carouselAssets = [history1, history2, history3, history4]

  const[historyMain, setHistoryMain]= useState(home)

  const handleClick =(e)=>{
     e.preventDefault()

     const clickedImage = carouselAssets[e.target.id]

     setHistoryMain(clickedImage)     

   }
  


  return (
    <div id='history' name='history'  >

      {/***history divider***/}
      <div className=' flex justify-around items-center h-24'> 
                <div className='flex font-bold leading-6'>
                  <img className='hover:scale-[1.2]  transition-all ease-in-out duration-300 delay-75' src={homeLogo} alt="logo" />
                  <p>LOS ANGELES <br /><span className='text-blue-900'>MOUNTAINS</span></p>
                </div>
              <div className=' flex font-bold text-lg text-blue-300 uppercase underline underline-offset-8  gap-14  '> 
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic'  href="#history"><p>01.History </p></a>
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic' href="#team"><p>02.Team</p></a>
            </div>
      </div>

    {/***main***/}
    <div className='relative' >
      <img className=' object-cover h-screen w-full ' src={historyMain} alt="bodyImage" /> 
    
      <div className=' absolute top-4  -mt-40  w-full h-full flex flex-col justify-center '>
          <div className='flex flex-row justify-center items-center'>
            <h1 className=' text-9xl text-gray-500 leading-tight tracking-tighter '>01.</h1>
            <h3 className='text-gray-700 text-2xl font-bold' >HISTORY</h3>
          </div>

          <div className=' w-3/6  ml-48 text-gray-700'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum numquam tempore eos, hic inventore veniam recusandae, non consectetur deleniti aut molestiae optio. Blanditiis voluptatibus, asperiores assumenda voluptatem quisquam eum nobis.</p>
          </div>
      </div>

        {/**Carousel*/}
        <div className=' pt-8 gap-4   bg-slate-500 opacity-75 h-40 absolute  -mt-40  w-full flex justify-center ' >
            
          {carouselAssets.map((pic, index)=>{
            return(
              <div 
                key={index}
                onClick={handleClick}
                style={{backgroundImage: `url(${pic})`}}
                id={index}
                className='hover:cursor-pointer
                opacity-100 flex flex-row w-1/6  h-5/6  bg-cover bg-no-repeat bg-center transition-all delay-300 duration-1000 ease-in-out animate-fade' 
              ></div>
            )
          })}


        </div>

     {/***team divider***/}
      <div className=' flex justify-around items-center w-full h-44 bg-white tracking-tighter'> 
           <div className='flex flex-row justify-center items-center tracking-tighter'>
              <h1 className=' text-9xl text-gray-400 leading-tight tracking-tighter '>02.</h1>
              <h3 className='text-gray-700 text-2xl font-bold tracking-tighter' >CLIMB</h3>
            </div>

            <div className=' w-2/6 h-full text-sm flex items-center  text-gray-500 tracking-tighter'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus, asperiores assumenda voluptatem quisquam eum nobis.</p>
            </div>
      </div>


    </div>


    </div>
  )
}

export default History
