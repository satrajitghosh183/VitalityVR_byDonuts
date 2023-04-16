import React from 'react'
import satrajit from './pics/satrajit.jpeg';
import me from './pics/me.jpg'
import anubhab from './pics/anubhab.png'
import { Link } from 'react-router-dom'
import about from './pics/about.jpg'
const About = () => {
  return (
    <>
    <div style={{backgroundImage: `url(${about})`,backgroundRepeat:"no-repeat",width:'100%',backgroundSize: "cover"}}>
    <Link to={'/'}><div className='text-white'>&#x2190;</div></Link>
    <h1 className='text-3xl font-serif font-bold ml-24 pt-16 mb-20 text-white'>About us</h1>
    <div className='text-lg p-20 font-serif font-semibold text-white' style={{border:'2px solid black',width:"900px", height:"500px",marginLeft:'250px',marginBottom:'100px'}}>Welcome to our AR/VR game - a revolutionary gaming experience that combines cutting-edge technology with captivating gameplay. we are dedicated to creating unforgettable adventures that transport players to new worlds and challenge them in ways they've never experienced before.<br></br><br></br>Our team of experts in game design, development, and technology have worked tirelessly to bring this game to life. We believe in building a community of players who share our love for adventure and challenge. That's why we're committed to fostering a positive and inclusive gaming environment where everyone can feel welcome and supported.
      <br></br><br></br>So if you're ready to embark on a journey unlike any other, join us in our AR/VR game. We can't wait to welcome you to our community of adventurers and push the boundaries of gaming together.

</div>
    <div className='space-y-9 pb-10' style={{display:'flex', flexDirection:'column'}}>
    <div className='space-x-10 w-full flex items-center' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
    <img className='bg-transparent rounded-full object-cover h-20 w-20' src={satrajit}/>
    <div className='font-serif font-normal text-base p-8 text-white' style={{border:'2px solid yellow', width:'500px', height:'200px'}}>SATRAJIT, our expert in game design and 3D modeling, brings a wealth of creativity and imagination to every aspect of our game. With an eye for detail and a deep understanding of player psychology, he ensures that every element of the game is designed to engage and delight our players.</div>
  </div>
   <div className='space-x-10 w-full flex items-center' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
   
   <div className='font-serif font-normal text-base p-8 text-white' style={{border:'2px solid purple', width:'500px', height:'200px'}}>SUBHRAMOY, our frontend wizard, is responsible for bringing the game to life with stunning visuals and smooth, intuitive controls. His expertise in user experience design ensures that every interaction with the game is seamless and immersive, drawing players deeper into the virtual world.
</div>
   <img className='bg-transparent rounded-full object-cover h-20 w-20' src={me}/>
 </div>
 <div className='space-x-10 w-full flex items-center' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
   <img className='bg-transparent rounded-full object-cover h-20 w-20' src={anubhab}/>
   <div className='font-serif font-normal text-base p-8 text-white' style={{border:'2px solid yellow', width:'500px', height:'200px'}}>ANUBHAB, our machine learning and GCP guru, brings the latest advances in artificial intelligence to our game, creating a dynamic and responsive environment that adapts to the player's actions in real-time. His expertise in cloud computing ensures that our game runs smoothly and reliably, no matter where in the world our players are.</div>
 </div>
 </div>
 </div>
 </>
  )
}

export default About