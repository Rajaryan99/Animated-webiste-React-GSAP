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

//   console.log(images[0])


//   for(let i=0; i<images.length; i++){
//     console.log(images[i])
//   }


let i = 0;
  

  const interval = setInterval(() => {
    
    if(i < images.length){
        console.log(images[i])
        i++
    }  else {
        clearInterval(interval)
    }


  }, 1000)