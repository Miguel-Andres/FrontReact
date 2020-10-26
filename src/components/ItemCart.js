import React ,{useContext , useEffect,useState}  from 'react'
import {CartContext} from "../context/CartContext"
import ButtonCount from "./ButtonCount"
import{Alert}from "react-bootstrap"


export default function ItemCart() {

  const [cart,setCart ,count] = useContext(CartContext)
  
 


  
 

  
   
  

  
  
  
  
    return (
        <React.Fragment>
       
      {cart.length? cart.map(item=>{return (

<div className="row mb-4" key={item.id}  >
    <div className="col-md-5 col-lg-3 col-xl-3">
      <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
        <img className="img-fluid w-100" src={item.image} alt={item.title} />
        
      </div>
    </div>

    <div className="col-md-7 col-lg-9 col-xl-9">
      <div>
        <div className="d-flex justify-content-between">
          <div>
        <h5>{item.title}</h5>
            <p className="mb-3 text-muted text-uppercase small">{item.description}</p>
            <p className="mb-2 text-muted text-uppercase small">Categoria :{item.categoryId}</p>
            <p className="mb-3 text-muted text-uppercase small">Precio Por unidad: ${item.price}</p>
          </div>
          <div>
            <ButtonCount quantity={item.quantity}/>
            <small  className="form-text text-muted text-center">
              (Note, {item.quantity} piece)
            </small>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="row">
            <p  type="button"  className="card-link-secondary small text-uppercase mr-3"><i className="fas fa-trash-alt mr-1" /> Remove item </p>
            <p  type="button" className="card-link-secondary small text-uppercase" ><i className="fas fa-heart mr-1" /> Move to wish list </p>
          </div>
          <p className="mb-0"><span><strong id="summary">$ {item.price*item.quantity}</strong></span></p>
        </div>
      </div>
      
<hr className="mb-4"/> 
    </div>

  </div>
) }) : <Alert   variant="info" >
            Cuidado No tienes Items Agregados al carrito 
            <Alert.Link href="/"> Click aca para comprar</Alert.Link>. 
          
          </Alert> }
      

     

          

          
              

               


           
        </React.Fragment>
    )
}
