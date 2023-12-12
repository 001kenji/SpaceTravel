import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crewData from  '../data.json'

import { FaCircle } from "react-icons/fa";



import Navbar from './navbar'
function Crew() {
  const [choice, setchoice] = useState(0)
  

  const circles = crewData.crew.map((details,i) => 
  <div>
        <span   id='circle' onClick={() => setchoice(i)} ><FaCircle className={ ` ${i == choice ? 'text-slate-100' : 'text-slate-400'} `} /></span>
        
  </div>
  )

//   <div className=' text-slate-300' id='mapping-div'>
    
//   <big>{details.role}</big>
//   <h1>{details.name}</h1>
//   <blockquote>{details.bio}</blockquote>
// </div> 
  const crewDataMappper = crewData.crew.map((details,i) => 
        {if(i == choice) {
            return (
                <div className=' text-slate-300' id='mapping-div'>
    
                <span className=' md:text-xl font-semibold text-slate-500'>{details.role.toUpperCase()}</span>
                <h1 className=' md:text-3xl font-semibold text-xl'>{details.name.toUpperCase()}</h1>
                <blockquote id='dest-blockTech' >{details.bio}</blockquote>
                </div> 
            )
        }}
    
  )

  const ImageMapper = crewData.crew.map((details,i) => 
        {if(i == choice) {
            return (
                <img id='mappedImg' src={details.images.png} alt="" />
            )
        }}
  )

  return (
    <>
    
    <div>
      <Navbar />
    </div>

    <div id='crew-owning-div'>
        <div className=' text-slate-200' id='crew-heading-div'>{/* crew heading div */}
            <h1 className=' md:text-xl text-lg'> <p className=' text-gray-600 font-semibold text-md'>02</p> MEET YOUR CREW</h1>
        </div>
        
        <div id='crew-hosting-div'>{/* crew mapped data div */}
            <div id='hosting-image-div'>
                {ImageMapper}
            </div>
            <div id='content-hosting-div'>
                <div id='content-hosting-div'>{crewDataMappper}</div>
                <div id='circle-hosting-div'>{circles}</div> 
                </div>

                
        </div>
    </div>

    

    </>
  )
}

export default Crew