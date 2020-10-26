import React ,{useState,useEffect} from 'react'
import {getFirestore} from "../firebase/firebase"


import PriceBuy from "./PriceBuy"






export default function Orders() {

    const [order,setOrder] = useState([])
    const [busqueda,setBusqueda] = useState({})




 useEffect(() => {

    const db = getFirestore()
    const pedidos = db.collection("orders")
    const pedidoBuscado = pedidos.where("id","==", "Cu5Luai0zx2QH5lAXt0P")

    pedidoBuscado.get().then(item=>{
        if(item.size== 0) {
            console.log("no hay resultados")
        }

        setOrder(item.docs.map(doc => {
            //consulta de DOCUMENTO 
          return {id: doc.id, ...doc.data()} }))
          
    }).finally(()=>{
       console.log(order)
    })
 }, [])

 


    return (
        <React.Fragment>
            {order.map(item=><p>{item.title}</p>)}
            <div className="container">
                <div className="row">
                    <div className="col-3" >
                        <h3>Verifica tu compra </h3>
                        <input name="id" placeholder="id de la compra" /> 
                    </div>
                    
                    <div className="col-9 row">
                        <div style={{backgroundColor:"honeydew" , display:"flex",justifyContent:"center"}} className="col-12">
                        <h2>Detalle de la compra</h2>
                            </div>
                      

                        <div className="col-8 articulos " style={{backgroundColor:"white"}}>

                            <div className="row mb-4"  >
                                <div className="col-md-5 col-lg-3 col-xl-3">
                                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img className="img-fluid w-100" src="" alt="" />

                                    </div>
                                </div>

                                <div className="col-md-7 col-lg-9 col-xl-9">
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>nombre del producto</h5>
                                                <p className="mb-3 text-muted text-uppercase small"></p>
                                                <p className="mb-2 text-muted text-uppercase small">Categoria :</p>
                                                <p className="mb-3 text-muted text-uppercase small">Precio Por unidad: $</p>
                                            </div>
                                            <div>

                                                <small className="form-text text-muted text-center">
                                                    (Note,  piece)
                                                </small>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="row">

                                            </div>
                                            <p className="mb-0"><span><strong id="summary">$ </strong></span></p>
                                        </div>
                                    </div>

                                    <hr className="mb-4" />
                                </div>

                            </div>

                        </div>









                         <div className="col-4" >
                         <PriceBuy/>
                        </div>   
                        
   
 

    
                       
                    </div>


                </div>

            </div>
        </React.Fragment>
    )
}
