import { useSelector,useDispatch } from "react-redux"
import { ordered,restocked } from "./cakeSlice";
const CakeView = () => {
  const numOfCakes=useSelector((state)=>state.cake.numOfCakes);
  const dispatch=useDispatch()
  return (
    <div>
        <h2>No. of Cakes-{numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Cake</button>
        <button onClick={()=>{dispatch(restocked(1))}}>Restock Cakes</button>
    </div>
  )
}

export default CakeView