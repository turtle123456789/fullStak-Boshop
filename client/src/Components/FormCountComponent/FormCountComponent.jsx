import { useState } from "react"
import { Button } from "react-bootstrap"
import './style.scss'
const FormCountComponent = () =>{
    const [valueQuantity,setValueQuantity] = useState(0)
    const increment = ()=>{
        setValueQuantity(valueQuantity+1)
    }
    const decrement = ()=>{
        if(valueQuantity>=1){
            setValueQuantity(valueQuantity-1)
        }
    }
    return(
    <div className="ButtonCount">
        <Button onClick={decrement}>-</Button>
        <input type="number" name="quantity" onChange={(e) => setValueQuantity(e.target.value)} value={valueQuantity}  id="" />
        <Button onClick={increment}>+</Button>
    </div>
    )
}
export default FormCountComponent