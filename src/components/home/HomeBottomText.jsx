import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBottomText() {
  return (
    <div className='text-white mb-4 flex items-center justify-center gap-4'>
      <Link  className=' border-2 text-[6.5vw] leading-[6vw] px-8 py-1 pt-0 pb-0 uppercase rounded-full font-medium' to='/projects'>Work</Link>
      <Link  className=' border-2 text-[6.5vw] leading-[6vw] px-8 py-1 pt-0 pb-0  uppercase rounded-full font-medium' to='/agents'>agency</Link>
    </div>
  )
}2