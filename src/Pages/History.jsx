//Image Imports
import home from '../assets/home.jpg'
import homeLogo from '../assets/homeLogo.png'
import team from '../assets/team.jpg'

const History = () => {
  return (
    <div id='history' name='history'  className=' text-content-yellow-800'>
      <div className=' flex justify-around items-center h-24'> 
                <div className='flex font-bold leading-6'>
                  <img className='hover:scale-[1.2]  transition-all ease-in-out duration-300 delay-75' src={homeLogo} alt="logo" />
                  <p>LOS ANGELES <br /><span className='text-blue-900'>MOUNTAINS</span></p>
                </div>s
              <div className=' flex font-bold text-lg text-stone-700 uppercase underline underline-offset-8  gap-14  '> 
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75'  href="#history"><p>01.History </p></a>
                <a className='hover:scale-[1.04]  transition-all ease-in-out duration-300 delay-75' href="#team"><p>02.Team</p></a>
            </div>
      </div>
    </div>
  )
}

export default History
