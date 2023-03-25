import React from 'react'
import {useCart,useDispatchCart} from '../components/ContextReducer';
export default function Cart() {
  let data= useCart();
  let dispatch= useDispatchCart();
  if(data.length===0)
  {
    return(
        <div>
        <div className='m-5 w-100 text-center fs-3'>Cart is empty!</div>
        </div>
    )
  }
  const handleCheckOut=async()=>{
   console.log(data);
  }
  let totalPrice= data.reduce((total,food)=>total+food.price,0)
    return (
<div>
<div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
<table className='table table-hover'>
<thead className='text-success fs-4'>
<tr>
<th scope='col'>#</th>
<th scope='col'>Name</th>
<th scope='col'>Quantity</th>
<th scope='col'>Option</th>
<th scope='col'>Amount</th>
<th scope='col'></th>
</tr>
</thead>
<tbody>
{data.map((food,index)=>{
   return( <tr key={index+1}>
    <th scope='row'>{index+1}</th>
    <td>{food.name}</td>
    <td>{food.qty}</td>
    <td>{food.size}</td>
    <td>{food.price}</td>
    <td><button type="button" className="btn p-0">
    <img src="https://cdn-icons-png.flaticon.com/128/1632/1632602.png" alt="delete" style={{width: '24px', height: '24px'}} onClick={() => {
      dispatch({type: "REMOVE", index: index})
    }} />
  </button>
        </td>
    </tr>
   )
})}
</tbody>
</table>
<div><h1 className='fs-2'>Total Price:{totalPrice}/-</h1></div>
<div>
<button className='btn bg-success mt-5'onClick={handleCheckOut}>Check Out</button>
</div>
</div>
</div>
    );
}
