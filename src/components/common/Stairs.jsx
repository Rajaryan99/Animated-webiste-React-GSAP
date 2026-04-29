import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom';

export default function Stairs() {

   const stairParentDivRef = useRef(null);

   const currentPath = useLocation().pathname;


useGSAP(() => {

  const tl = gsap.timeline();

  tl.to(stairParentDivRef.current,{
    display:"block"
  })

  tl.from('.stair', {
      height:0,
      stagger:{
        amount:-0.25
      }

  })
  tl.to('.stair', {
    y:"100%",
     stagger:{
        amount:-0.25
      }

  })

  tl.to(stairParentDivRef.current,{
    display:"none"
  })
   tl.to('.stair', {
    y:"0%",
   })
     
}, [currentPath])


  return (
       <div ref={stairParentDivRef} className='h-screen w-full  fixed z-20 top-0'>
    <div className='h-screen w-full flex ' >
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
    </div>
    </div>
  )
}
