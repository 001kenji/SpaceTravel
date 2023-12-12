import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crewData from  '../data.json'

import { FaCircle } from "react-icons/fa";



import Navbar from './navbar'
function Tech() {
  const [choice, setchoice] = useState(0)
  

  const circles = crewData.technology.map((details,i) => 
  
        <span className='  '   id='circletech' onClick={() => setchoice(i)} ><p className={ `  lg:rounded-full lg:w-9 lg:text-center  md:text-2xl text-xl ${i == choice ? 'text-slate-100 border-b-2 rounded-sm border-b-orange-400 lg:border-b-transparent lg:bg-slate-200 text-slate-900 ' : 'text-slate-400'} `} >{i + 1}</p></span>
        
 
  )


  const crewDataMappper = crewData.technology.map((details,i) => 
        {if(i == choice) {
            return (
                <div className=' text-slate-300' id='mapping-div-T'>
                <h1 className='lg:text-2xl font-semibold text-2xl'>{details.name.toUpperCase()}</h1>
                <blockquote  id='dest-blockTech' className=''>{details.description}</blockquote>
               
                </div> 
            )
        }}
    
  )

  const ImageMapper = crewData.technology.map((details,i) => 
        {if(i == choice) {
            return (
                <img className=' rounded-sm' id='mappedImgTech' src={window.orientation == 0 ? details.images.portrait : details.images.landscape} alt="" />
            )
        }}
  )

  return (
    <>
    
    <div>
      <Navbar />
    </div>

    <div id='technology-owning-div'>
        <div className=' text-slate-200' id='technology-heading-div'>{/* crew heading div */}
            <h1 className=' lg:text-xl md:text-2xl flex flex-row gap-4 text-lg'> <p className=' text-gray-600 font-semibold text-md'>03</p> SPACE LAUNCH 101</h1>
        </div>
        
        <div id='technology-hosting-div'>{/* crew mapped data div */}
            <div id='hosting-image-technology-div'>
                {ImageMapper}
            </div>
            <div id='technology-content-hosting-div'>
                <div id='technology-content-hosting-div'>{crewDataMappper}</div>
                <div id='technology-circle-hosting-div'>{circles}</div> 
                </div>

                
        </div>
    </div>

    

    

    </>
  )
}

export default Tech