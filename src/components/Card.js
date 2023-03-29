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
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })

  }

  let finalPrice=qty*parseInt(options[size]);
  useEffect(()=>{setSize(priceRef.current.value)},
  [])
  return (

    <div className="card mb-3 border border-2" style={{ maxWidth: "18rem" }}>
    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "100px", objectFit: "fill" }} />
    <div className="card-body py-3">
      <h5 className="card-title">{props.foodItem.name}</h5>
      <p className="card-text">This is some important text</p>
      <div className="container w-100">
        <select className="m-2 h-100 bg-dark text-light fs-5 rounded">
          {Array.from(Array(6), (e, i) => {
            return (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            );
          })}
        </select>
        <select className="m-2 h-100 bg-dark text-light fs-5 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
          {priceOptions.filter((d) => d !== "_id").map((data) => {
            return (<option key={data} value={data}>{data}</option>)
          })}
        </select>
        <div className="d-inline h-100 fs-4">₹{finalPrice}/-</div>
      </div>
      <hr />
      <button className="btn btn-primary justify-center mx-2" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
  

  );
}
