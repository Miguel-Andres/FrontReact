import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from "../context/CartContext"

import ItemCart from "./ItemCart"
import FooterPagos from "./checkout/FooterPagos"
import Formulario from "./Formulario"
import PriceBuy from "./PriceBuy"



export default function Cart() {


  const [cart, setCart, count, setCount] = useContext(CartContext)
  const [pago, setPago] = useState(true)
  const [pricetotal, setTotalPrice] = useState(0)
  const[ingresoDatos,setIngresoDatos] = useState(false)

  let newDate = new Date()
  let fecha = newDate.getDate() + " " + newDate.getMonth() + " " + newDate.getFullYear();


  

 
  //escuchamos el estado cart si no hay item el boton de pago disable
  useEffect(() => {
    if (cart.length) {
      setPago(false)
    }

    setTotalPrice(
      cart.map(item => item.price * item.quantity).reduce((total, valor) => total + valor, 0)


    );


  }, [cart])

  const mostrar=(e)=>{
 setIngresoDatos(true)
  }
    


  return (
    <React.Fragment>
      {/*Section: Block Content*/}
      <section style={{ border: "4px solid ", margin: "50px ", marginColor: "##d3de32", padding: "20px", backgroundColor: "#ffffdd" }}>
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-8">

            {/* resumen  */}
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h5 className="mb-4">Cart (<span>{cart?cart.map(item=>item.quantity).reduce((total,valor)=>total + valor,0):0} </span> items)</h5>

                {/*Start Item detail*/}
                <ItemCart />
                {/*finish item detail*/}



                <p className="text-primary"><i className="fas fa-info-circle mr-1" /> Agregando Articulos en su carrito no significa Reservarlos</p>
              </div>
            </div>
            {/* end resumen*/}

            {/* Fecha de Envio */}
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">Expected shipping delivery en el mismo Dia</h5>
                <p className="mb-0">{fecha} </p>
              </div>
            </div>
            {/* en Fecha de envio  */}

            {/* Card */}
            <FooterPagos />
            {/* Card */}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4">
            {/* Card */}

            <PriceBuy  mostrar={mostrar} pricetotal={pricetotal} pago={pago}/>

            <div className="mb-3" >
              <div className="pt-4">
             
              {ingresoDatos?<Formulario/>:null}
                
             
              </div>
            </div>
            {/* Card */}


          </div>
          {/*Grid column*/}
        </div>
        {/* Grid row */}
      </section>
      {/*Section: Block Content*/}
    </React.Fragment>
  )
}
