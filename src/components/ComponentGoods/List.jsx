import React from 'react'
import { useHistory } from 'react-router-dom';
const List = ({goods}) => {
  const history = useHistory();
  const deleteFunc = (id) => {
    if(!id){
      console.log('no id');
      return;
    }else{
      fetch(`http://localhost:4000/Goods/${id}`, {
        method:'DELETE',
        
      }).then(() => {
        console.log('deleted')
        history.push('/')
      })
    }
  }
  return (
    <div>
        
         {goods.map((good) => (
            <div className='good-preview' style={{
              justifyContent:'center',
              textAlign:"center",
              margin:'auto',
              width:'65%',
            }}key={good.id}>
              <div className='Title'>
              </div>
              <div className='lists' style={{
                display:'flex',
                justifyContent:'space-between',
                backgroundColor:'#C7F9C6',
                margin:'20px',
                borderRadius:'40px',
                textAlign:'center',
              }}>
             <h3>{good.name}</h3>
             <h3>{good.quantity}</h3>
             <h4>{good.currency}{good.price}</h4>
             
             <h3 style={{
               color:'#24B84D',
             }}>Bought</h3>
             <button onClick={() => deleteFunc(good.id)}>Delete</button>
             </div>
            </div>
        ))}
    </div>
  )
}

export default List