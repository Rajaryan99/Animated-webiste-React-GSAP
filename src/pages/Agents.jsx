import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

export default function Agents() {

  gsap.registerPlugin(ScrollTrigger)

  const divImageRef = useRef(null)
  const imageRef = useRef(null)


  const images = [
    '/src/assets/team/CAMILLE_640X960_2.jpg',
    '/src/assets/team/Carl_480x640.jpg',
    '/src/assets/team/Olivier_480x640.jpg',
    '/src/assets/team/Michele_480X640.jpg',
    '/src/assets/team/MEL_480X640.jpg',
    '/src/assets/team/MEGGIE_480X640_2.jpg',
    '/src/assets/team/joel_480X640_3.jpg',
    '/src/assets/team/ChantalG_480x640.jpg',
  ]

  useGSAP(() => {
    gsap.to(divImageRef.current, {
      scrollTrigger:{
        trigger: divImageRef.current,
        // markers:true,
        start:'top 28.5%',
        end:'top -110%',
        pin:true,
        scrub: true,
        onUpdate:(elem) => {
          let imageIndex;
          if(elem.progress < 1){
          //  imageIndex =  Math.round(elem.progress * images.length)
          imageIndex = Math.min(
              images.length - 1,
                   Math.floor(elem.progress * images.length)
                  )
          } else {
            imageIndex = images.length - 1
          }

          imageRef.current.src = images[imageIndex]
        }
      }
    })
  })

  return (
    <div className="section1">
    <div className='bg-white'>
      <div ref={divImageRef} className=' absolute  h-80 w-55 rounded-3xl bg-white overflow-hidden object-cover  left-115 top-55'>
          <img ref={imageRef} src="/src/assets/team/CAMILLE_640X960_2.jpg" className='h-full w-full'  alt=""  />
      </div>
      <div className=' relative text-center mt-[58vh]'> 
        <h1 className='text-[20vw] z-2 font-[font2] leading-[17vw]'>SEVEN7Y TWO</h1>
      </div>
      <div className=' relative pl-[40%] pr-[5%]'>
        <p className='font-[font2] text-6xl font-bold '>&emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
    <div className="section2 h-screen"></div>
    </div>
  )
}
  