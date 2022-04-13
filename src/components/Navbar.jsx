import React from 'react'
const Navbar = () => {
    const total = 4;
  return (
    <div>
        <a href='/'>jdk</a>
       <nav style={{
           display:'flex',
           justifyContent:'space-around',
       }}>
           
       
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