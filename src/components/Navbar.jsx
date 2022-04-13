import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const total = 4;
  return (
    <div>
       <nav style={{
           display:'flex',
           justifyContent:'space-around',
       }}>
           <Link to='/home'>Tuoir</Link>
       
           <ul style={{
               listStyleType:'none',
               paddingTop:'0.4rem',
               color:'#fff',
           }}>
               <li>Total : {total}</li>
           </ul>
       </nav>
    </div>
  )
}

export default Navbar