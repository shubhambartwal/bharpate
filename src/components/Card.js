import React,{useEffect, useRef, useState} from "react";
import { useDispatchCart,useCart } from "./ContextReducer";
export default function Card(props) {
  let data=useCart();
  let dispatch=useDispatchCart();
  let options = props.options;
  let priceOptions= Object.keys(options);
  const [qty,setQty]=useState(1);
  const[size,setSize]= useState("");
  const priceRef=useRef();
  const handleAddToCart=async()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,
  name:props.foodItem.name,
price:finalPrice,
qty:qty,
size:size,
img:props.foodItem.img})
console.log(data);
  }
  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{setSize(priceRef.current.value)},
  [])
  return (

    <div
    className="card mt-3"
    style={{ width: "18rem", maxHeight: "360px" }}
  >
    <img src={props.foodItem.img} className="card-img-top" alt="..." 
    style={{height:"120px",objectFit:"fill"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.foodItem.name}</h5>
      <p className="card-text">This is some important text</p>
      <div className=" container w-100">
        <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <select className="m-2 h-100  bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
          {
            priceOptions.filter((d)=>d!=="_id").map((data)=>{
            return(<option key={data} value={data}>{data}</option>)
          })}
        
        </select>
        <div className="d-inline h-100 fs-6">₹{finalPrice}/-</div>
      </div>
    </div>
    <hr/>
    <button className="btn btn-success justify-center mx-2" onClick={handleAddToCart}>Add to Cart</button>
  </div>
  );
}
