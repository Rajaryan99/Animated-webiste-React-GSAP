import React from 'react'

export default function Video({className = ''}) {
  return (
    
            <video   
            className={` h-full w-full object-cover ${className}`} 
            autoPlay 
            loop 
            muted 
            src="/src/assets/heroVideo1.mp4"></video>
      
  )
}
