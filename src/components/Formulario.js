import React ,{useState,useContext} from 'react'
import{Form,Row,Col}from "react-bootstrap"
import {useForm } from "react-hook-form"
import {CartContext} from "../context/CartContext"
import {getFirestore} from "../firebase/firebase"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import * as firebase from "firebase/app";
import "firebase/firestore";







export default function Formulario() {
  const MySwal = withReactContent(Swal)
  const{register, errors,getValues,handleSubmit} = useForm()

  const[user,setUser]= useState([])
  const [cart]= useContext(CartContext)
  const totalPrice = cart.map(item => item.price * item.quantity).reduce((total, valor) => total + valor, 0)
  const[orderId,setOrderId] = useState([])

  const getUser = (data, e) => {
    console.log(data);
    var informacion = {'name': data.name, 'email': data.email , 'telefono':data.telefono}
    console.log(informacion)  
    setUser([
        ...user,
        informacion            
    ])      
    console.log(user);                
    // limpiar campos
    e.target.reset();       
} 


      
    
      
function getOrder() { 
           
  const db = getFirestore();
  const orders = db.collection('orders');
  console.log(cart);
  orders.add(
      {
      buyer: user,       
      items: cart,
      data: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice,                   
      }
    ).then(({id})=>{
      setOrderId(id)//sucess 
      MySwal.fire("Terminaste tu Compra", `Codigo de compra <b>${id}</b> `,"success")          
    }).catch((error) =>{
      console.log('Error add orders: ', error);
   }).finally(() =>{
      console.log(orderId);
      setUser([]);                    
    }); 
  };


    return (
       <React.Fragment>
            <h5 className="mb-3" >Pago y envio </h5>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-3 pb-3" >
            <Form onSubmit={handleSubmit(getUser)}>
                      <Row>
                        <Col>
                          <Form.Control name="name" placeholder="name" ref={
                register({
                            required: {
                              value:true, message: 'Ingrese nombre'
                              },
                              minLength: {
                              value: 3, 
                              message: 'Mínimo 3 carácteres'
                              }
                        })
                    } />
                    <span className="text-danger text-small d-block mb-2">
            {errors?.name?.message}
          </span>
                        </Col>
                        <Col>
                          <Form.Control name="telefono" placeholder="Telefono" ref={
                    register({                      
                        required: {
                          value:true, message: 'Ingrese número de Telefono'
                          },
                          min: {
                              value: 1000000, 
                              message: 'minimo 7 carácteres numéricos positivos!'
                              },
                              max: {
                              value: 999999999999999, 
                              message: 'maximo 15 carácteres numéricos positivos!'
                              }
                        })
                    } />           <span className="text-danger text-small d-block mb-2">
                    {errors?.telefono?.message}
                  </span>
                        </Col>
                      </Row>
                      <hr></hr>
                      <Row>
                        <Col>
                          <Form.Control name="email" placeholder="email" ref={register({
                          required: "Email is required!",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                            }
                        })}/>
                            <span className="text-danger text-small d-block mb-2">
            {errors?.email?.message}
          </span>
                        </Col>
                        <Col>
                          <Form.Control name="confirmEmail"  placeholder="repeat-email" ref={register({
                required: "Please confirm email!",
                pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                validate: {
                matchesPreviousPassword: value => {
                  const { email } = getValues();
                  return email === value || "Emails should match!";
              }
            }
              })} />
                           <span className="text-danger text-small d-block mb-2">
            {errors?.confirmEmail?.message}
          </span>
                        </Col>
                      </Row>
                      <button  type="submit" className="btn btn-danger btn-block"  >cargar datos </button>
                    </Form>
                  </li>
                  
                </ul>
                <div className="mt-2">
                  <p>Guardar tu tikect Nro: {orderId}</p>
                {
                   user.map((item,index) =>
                        <h3 key={index} >
                            {item.name} {item.telefono}  
                        </h3> )                    
                } {cart.map((item,index) =>
                  <h5 key={index}>
                      {item.title} {item.price}  
                  </h5> ) }
                {user.length !==0 ? <button className="btn btn-success" onClick={getOrder}>
                Finalizar compra
              </button> :null}
            </div>
               

             
   
    
        
               </React.Fragment>
    )
}
