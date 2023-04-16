import React from 'react'
import gamer from './pics/gamer.jpg'
import { Link } from 'react-router-dom'
const Download = () => {
  return (
    <div className='w-full text-white' style={{backgroundColor:'transparent',height:'900px',backgroundImage: `url(${gamer})`,backgroundRepeat:"no-repeat",width:'100%',backgroundSize: "cover"}}>
        <Link to={'/'}><div>&#x2190;</div></Link>
        <h1 className='ml-96 text-6xl pt-10'>Steps</h1><br></br><br></br>
        <h1 className='ml-96 text-4xl'>1.Choose what exercise you want to go through</h1><br></br><br></br>
        <h1 className='ml-96 text-4xl'>2. Download tye desire apk</h1><br></br><br></br>
        <h1 className='ml-96 text-4xl'>3. Upload to oculus using developer hub</h1><br></br><br></br>
        <h1 className='ml-96 text-4xl'>4.Enjoy the game </h1><br></br><br></br>
        <h1 className='ml-96 text-4xl'>5. Come back !! Check your stats </h1><br></br><br></br>
        
        <a href='https://drive.google.com/drive/folders/1IUnKfSfIBjlfb6mRZHm9A77EsIzZHfd2'><button className='ml-96' style={{border:'2px solid white', padding:'8px'}}>Download</button></a>
    </div>
  )
}

export default Download