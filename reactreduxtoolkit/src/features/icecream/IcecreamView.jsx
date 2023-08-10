import { useDispatch, useSelector } from "react-redux"
import {ordered,restocked} from "./icecreamSlice"
import { useState } from "react";

const IcecreamView = () => {
  const [value,setValue]=useState(1);
  const numOfIcecream=useSelector((state)=>state.icecream.numberOfIcecream);
  const dispatch=useDispatch();
  return (
    <div>
        <h2>No. of IceCreams--{numOfIcecream}</h2>
        <button onClick={()=>{dispatch(ordered())}}>Order IceCream</button>
        <input type="number" value={value} onChange={e=>setValue(parseInt(e.target.value))}/> 
        <button onClick={()=>{dispatch(restocked(value))}}>Restock IceCreams</button>
    </div>
  )
}

export default IcecreamView