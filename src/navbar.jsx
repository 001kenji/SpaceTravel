import React, { useEffect, useState } from "react";
import './App.css'

import cross from '../assets/shared/icon-close.svg'


import star from '../assets/shared/logo.svg'

import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const [current, setcurrent] = useState(1)
    const [selection, setSelection] = useState(false)
    function Show(props) {
        if(props == 'show'){
          setSelection(true)
          setcurrent(0)
    
        }
        else if(props == 'hide'){
          setSelection(false)
          setcurrent(1)
    
        }else if(props == 'comp'){
          setSelection(false)
          setcurrent(0)
        }
      }
    window.addEventListener('resize', function() {
      if(this.screen.width >= 768) {
        setcurrent(0)
      }else {
        setcurrent(1)
      }
    })
  
    window.addEventListener('loadeddata', function () {
      if(screen.width >= 768) {
        setcurrent(0)
      }else {
        setcurrent(1)
      }
    })
    useEffect(  () => {
      if(screen.width >= 768) {
        setcurrent(0)
      }else {
        setcurrent(1)
      }
    },[])

    return (
        <>  
        

           <div id="navbar-owning-div">
            <div id="navbar-container-div">
                <div id='navbar-img-div'> {/* icon div */}
                                <img className=" rounded-full bg-slate-100" src={star} alt="" />
                            </div>
                            
                            <div  id="navbar-ham-div"> {/* navbar hamburger div */}
                                {selection ? <img className="  rounded-full p-0" onClick={() => Show('hide')} src={cross}  />  : <GiHamburgerMenu className=" text-slate-100 text-2xl" onClick={() => Show('show')} />}
                            </div>
            </div>
           
            

        </div>
        <div style={{transform: `translateX(-${current * 100}%)`}} className=' transition ease-in-out duration-500 bg-slate-200 md:bg-slate-800 md:text-slate-200 bg-opacity-90 text-slate-950 font-semibold p-2' id="navbar-content-div"> {/* navbar content div */}
                <ul>
                    <li><a href="../index.html">HOME</a></li>
                    <li><a href="../destination.html">DESTINATION</a></li>
                    <li><a href="../crew.html">CREW</a></li>
                    <li><a href="../tech.html">TECHNOLOGY</a></li>
                </ul>
        </div>
       
       
        </>
        
    )
}