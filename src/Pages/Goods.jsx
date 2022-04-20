import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch'
import List from '../components/ComponentGoods/List';
const Goods = () => {
  const {goods, error, loading} = useFetch('http://localhost:4000/Goods');
  console.log(goods);

  return (
    <div className='list-goods' style={{
      background:'#C4EEC3', width:'100%', minHeight:'100vh'
    }}>
     <Navbar/>
     <div className='goods'>
      {
        loading && <div>Loading...</div>
      }
      {
        error && <div>{error}</div>
      }
      {
        goods ? <List goods={goods}/>:<div>No Goods Created <Link to="/">Create One</Link></div>
      }
     </div>
    </div>
  )
}

export default Goods