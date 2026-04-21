  import React from 'react'
  import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
  

  export default function stairs() {

    
  const stairRef = useRef(null)


  useGSAP(() => {

    const tl = gsap.timeline()
    
    tl.to(stairRef.current, {
      display:"block"
    }) 

    tl.from('.stair', {
      height:0,
      duration:1,
      stagger:{
        amount:-0.25
      }

    })
    tl.to('.stair', {
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairRef.current, {
      display:'none'
    })
    tl.to(".stair",{
      y:'0%'
    })
  })

    return (
      <div ref={stairRef} className='h-screen w-full fixed z-10 top-0' >
      <div className='h-full w-full  flex'>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
      <div className=' stair h-full w-1/5 bg-black'> </div>
    </div>
     </div>
    )
  }
  