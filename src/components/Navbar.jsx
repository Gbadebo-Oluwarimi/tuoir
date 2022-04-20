import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
const Navbar = () => {
    const {goods} = useFetch('http://localhost:4000/Goods');
    const total = goods.length;

  return (
    <div>
       <nav style={{
           display:'flex',
           justifyContent:'space-around',
       }}>
           <Link to='/' style={{
               fontSize:"30px",
               textDecoration:'none',
               color:'#24B84D'
           }}>Tuoir</Link>
       
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