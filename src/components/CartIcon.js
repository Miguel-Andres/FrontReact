import React ,{useContext } from 'react'
import {Badge} from "react-bootstrap"
import {CartContext} from "../context/CartContext"

export default  function CartIcon(){

    const [cart] = useContext(CartContext)
    
   
        return (
            <React.Fragment>
                    <div >

                <i className="fas fa-shopping-basket fa-2x" ></i>
        <Badge variant="warning" style={{verticalAlign:"top"}}>{cart?cart.map(item=>item.quantity).reduce((total,valor)=>total + valor,0):0}</Badge>
                    </div>
            </React.Fragment>
        )
    }

