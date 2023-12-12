import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import crewData from  '../data.json'

import { FaCircle } from "react-icons/fa";



import Navbar from './navbar'
function Destination() {
  const [choice, setchoice] = useState(0)
  

  const circles = crewData.destinations.map((details,i) => 
  <div>
        <span   id='circledestination' onClick={() => setchoice(i)} ><p className={ ` ${i == choice ? 'text-slate-100 border-b-2 rounded-sm border-b-orange-400' : 'text-slate-400'} `} >{details.name}</p></span>
        
  </div>
  )


  const crewDataMappper = crewData.destinations.map((details,i) => 
        {if(i == choice) {
            return (
                <div className=' text-slate-300' id='mapping-div'>
                <h1 className=' font-semibold lg:text-4xl md:text-5xl text-2xl'>{details.name.toUpperCase()}</h1>
                <blockquote id='dest-block'>{details.description}</blockquote>
                <div className=' flex flex-row gap-8 align-middle justify-center pt-2'>
                    <hr className=' h-[1px] bg-slate-800 w-3/4  absolute' />
                    <div>
                        <span className='md:text-xl  text-sm'>SVG. DISTANCE</span>
                        <p className='md:text-xl font-serif text-lg'>{details.distance}</p>
                    </div>
                    <div>
                        <span className=' md:text-xl text-sm'>SVG. DISTANCE</span>
                        <p className='md:text-xl font-serif text-lg'>{details.travel}</p>
                    </div>
                </div>
                </div> 
            )
        }}
    
  )

  const ImageMapper = crewData.destinations.map((details,i) => 
        {if(i == choice) {
            return (
                <img id='mappedImgDest' src={details.images.png} alt="" />
            )
        }}
  )

  return (
    <>
    
    <div>
      <Navbar />
    </div>

    <div id='destination-owning-div'>
        <div className=' text-slate-200' id='destination-heading-div'>{/* crew heading div */}
            <h1 className=' flex flex-row gap-4 md:text-xl text-lg'> <p className=' text-gray-600 font-semibold  text-md'>01</p> PICK YOUR DESTINATION</h1>
        </div>
        
        <div id='destination-hosting-div'>{/* crew mapped data div */}
            <div id='hosting-image-destination-div'>
                {ImageMapper}
            </div>
            <div id='destination-content-hosting-div'>
                <div id='destination-content-hosting-div'>{crewDataMappper}</div>
                <div id='destination-circle-hosting-div'>{circles}</div> 
                </div>

                
        </div>
    </div>

    

    

    </>
  )
}

export default Destination