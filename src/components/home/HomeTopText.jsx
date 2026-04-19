import React from 'react'
import Video from './Video'

export default function HomeTopText() {
  return ( 
    <>
    <div  className='font font-[font1] pt-5 text-center'>
        <div className='text-[9.5vw] uppercase  flex justify-center items-center     leading-[8vw] text-amber-50'>
          The spark for
          </div>
        <div className='font text-[9.5vw] flex justify-center items-center uppercase leading-[8vw] text-amber-50'>
          all 
          <div className=' h-[6vw] w-[12vw] rounded-full -mt-2 overflow-hidden'>
            <Video className='rounded-full'/>
            </div>
            things
            </div>
        <div className='font text-[9.5vw] flex justify-center items-center uppercase leading-[8vw] text-amber-50'>
          creative
          </div> 
    </div>
    </>
  )
}
