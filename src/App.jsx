//Style Imports
import './App.css'

//Page Imports
import Home from './Pages/Home'
import History from './Pages/History'
import Contact from './Pages/Team'

function App() {

  return (
    <div className='max-w-screen max-h-screen'>
      <Home/>
      <History/>
      <Contact/>
    </div>
  )
}

export default App
