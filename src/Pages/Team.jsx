
//Image Imports
import climb from '../assets/climb.jpg'
import homeLogo from '../assets/homeLogo.png'

const Team = () => {
  return (
    <div id='team' name='team' className=' flex flex-col ' >

            {/****mountain divider***/}
            <div className='  w-full flex justify-start pl-32 items-center h-12 bg-gray-700'> 
                <div className=' flex items-center font-bold text-lg text-gray-400 uppercase  gap-14 h-full  '> 
                  <a className='flex items-center  h-full hover:p-5 hover:text-gray-600 hover:bg-gray-200 hover:scale-[1.04] hover:underline hover:underline-offset-4  transition-all ease-in-out duration-300 delay-75'  href="#"><p>Mountain 1</p></a>
                  <a className='flex items-center  h-full hover:p-5 hover:text-gray-600 hover:bg-gray-200 hover:scale-[1.04] hover:underline hover:underline-offset-4   transition-all ease-in-out duration-300 delay-75' href="#"><p>Mountain 2</p></a>
                </div>
            </div>
            
            {/****image divider***/}
            <div className=' relative z-0 w-full flex items-center h-full bg-gray-700'> 
              <img className=' object-cover h-screen w-full ' src={climb} alt="bodyImage" /> 
            
              <div className='absolute z-50 w-full h-full flex justify-center items-center'>
                <div className=' bg-slate-200 opacity-95 h-2/6 w-4/6 p-5  lg:w-4/12 flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-5xl text-slate-700'>Schedule</h1>

                    <table className='mt-5 text-gray-600'>
                      <tr className='flex gap-10'>
                        <td>25 Nov 2016</td>
                        <td>Vestiulum virera</td>
                      </tr>
                      <tr className='flex gap-10'>
                        <td>25 Nov 2016</td>
                        <td>Vestiulum virera</td>
                      </tr>
                      <br />
                      <tr className='flex gap-10'>
                        <td>25 Nov 2016</td>
                        <td>Vestiulum virera</td>
                      </tr>
                      <br />
                      <tr className='flex gap-10'>
                        <td>25 Nov 2016</td>
                        <td>Vestiulum virera</td>
                      </tr>
                    </table>
                </div>
              </div>

            </div>

            {/* ***footer** */}
            <div className=' w-full flex justify-around items-center h-24 bg-gray-600 '> 
                    <div className='gap-2 flex font-bold leading-6 opacity-75 '>
                        <img className='opacity-75 before:hover:scale-[1.2]  transition-all ease-in-out duration-300 delay-75' src={homeLogo} alt="logo" />
                        <p className='opacity-75'>LOS ANGELES <br /><span className='text-blue-900'>MOUNTAINS</span></p>
                   </div>
                    <div className='opacity-75 flex font-bold text-sm md:text-lg text-blue-300 uppercase  '> 
                      <a className='opacity-75 hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75 italic uppercase '  href="#"><p>Copyright 2016. All Rights reserved. </p></a>
                   </div>
            </div>




    </div>
  )
}

export default Team
