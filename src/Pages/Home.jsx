import React from 'react'
import Leftcomp from '../components/Componenthome/leftcomp'
import { useState} from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()

  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('$');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  // function to submit all goods
  const submitGoods = (e) => {
    e.preventDefault()
    if(name === '' || price === 0 || quantity === 0){
      alert('all fieds are required')
      return 
    }
    const Goods = {name,currency,price,quantity};
    fetch('http://localhost:4000/Goods', {
      method:'POST',
      headers:{'content-Type':'Application/json'},
      body:JSON.stringify(Goods)
    }).then(() => {
      console.log('data saved to json-server');
      history.push('/goods');
    })
  }



  return (
    <div className='Home'>
      <div className='svgs'>
                </div>
        <div className='left-content'>
            <div className='Logo'>
                <h2>Tuoir</h2>
            </div>
            <div className='Header-text'>
        <Leftcomp/>
        </div>
        </div>
        <div className='right-content'>
            <div className='form'>
              <h2><center style={{color:'#24B84D'}}>Create Goods</center></h2>
              <div className='main-form'>
                
               <form onSubmit={submitGoods}>
              <div className='input-1'>
                <label>Name of Product:</label><br/>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name}/>
              </div>

              <div className='input-3'>
                <label>Price of Product</label><br/>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                  <option value="$">$</option>
                  <option value="N">N</option>
                  <option value="Y">Y</option>
                </select>
                <input type='number' value={price} onChange={(e) => setPrice(e.target.value)}/>
              </div>
              <div className='input-1'>
                <label>Quantity</label><br/>
                <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>

              <center><button>Create</button></center>
               </form>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Home