import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
      <Navbar />
    </div>

    <div className=' text-slate-200' id='home-container-div'>
      
      <div id='home-content-div'>{/* space content */}
          <big className=' text-slate-200'>SO, YOU WANT TO TRAVEL TO</big>
          <h1 className=' text-slate-50'>SPACE</h1>
          <blockquote>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </blockquote>
      </div>

      <div id='explore-home-div'>{/* explore content */}
        <span className='  bg-slate-100 text-slate-950 font-semibold rounded-full '><p>EXPLORE</p></span>
      </div>
    </div>

    </>
  )
}

export default App
