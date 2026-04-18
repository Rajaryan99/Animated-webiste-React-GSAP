import React from 'react'

export default function Video() {
  return (
    <div className='h-screen '>
            <video   className='h-full w-full object-cover' autoPlay loop muted src="/src/assets/heroVideo1.mp4"></video>
        </div>
  )
}
