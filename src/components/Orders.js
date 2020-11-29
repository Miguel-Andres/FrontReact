import React ,{useState,useEffect} from 'react'
import {getFirestore} from "../firebase/firebase"


import PriceBuy from "./PriceBuy"


let dataNull = {
    buyer : [
      {  name : "Buscando " }
    ] ,
    items : [
        {title : "buscando"}
    ]
}



export default function Orders() {

    const [order,setOrder] = useState(dataNull)
    const [busqueda,setBusqueda] = useState({
        id : "",
    })

  
   

    const handleCode = (e)=>{
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value})        
         }
         console.log(busqueda)
  


 useEffect(() => {

    const db = getFirestore()
    const pedidos = db.collection("orders")
    let  pedidoBuscado = busqueda.id===""? pedidos.doc("CCTwf07GTwpT5aD2bPqd") : pedidos.doc(busqueda.id)

  setTimeout(() => {
    pedidoBuscado.get().then(doc=>{
        if(!doc.exists) {
            console.log("no hay resultados")
        }
            console.log(doc.data())
            
        setOrder(doc.data())
            //consulta de DOCUMENTO 
          
          
    }).catch(err=>{
        console.log("error buscanto items",err)
    }).finally(()=>{
       
       console.log("encontrados")
    
       
    })
  }, 1000);
     
    
 }, [busqueda]) 



 

    return (
        <React.Fragment>
     
      

    
            <div className="container">
                <div className="row">
                    <div className="col-3" >
                        <h3>Verifica tu compra </h3>
                        <form action="POST">

                        <input name="id" placeholder="id de la compra"  onChange={handleCode}/> 
                        </form>

                        {order.buyer.map(value=>{ 
                return <div style={{border:"3px tomato " , backgroundColor:"tomato"}}>
                           <p>Cliente :{value.name} </p> 
                           <p>telefono :{value.telefono}</p>
                           <p>Email : {value.email}</p>
                       </div> 
                        
                        })}
                    </div>
                    <div className="col-9 row">
                        <div style={{backgroundColor:"honeydew" , display:"flex",justifyContent:"center"}} className="col-12">
                        <h2>Detalle de la compra </h2>
                        
                        
                            </div>
                      

                        <div className="col-8 articulos " style={{backgroundColor:""}}>

                                {order.items.map(value=>(  <div>
                            <div className="row mb-4"  >
                                <div className="col-md-5 col-lg-3 col-xl-3">
                                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img className="img-fluid w-100" src={value.image} alt="" />

                                    </div>
                                </div>

                                <div className="col-md-7 col-lg-9 col-xl-9">
                                      <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>{value.title}</h5>
                                                <p className="mb-3 text-muted text-uppercase small"></p>
                                                <p className="mb-2 text-muted text-uppercase small">Categoria :{value.categoryId}</p>
                                                <p className="mb-3 text-muted text-uppercase small">Precio Por unidad: ${value.price}</p>
                                            </div>
                                            <div>

                                                <small className="form-text text-muted text-center">
                                                    (Note, {value.quantity}  piece)
                                                </small>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="row">

                                            </div>
                                            <p className="mb-0"><span><strong id="summary">${order?value.quantity*value.price:<p>Loading</p>} </strong></span></p>
                                        </div>
                                    <hr className="mb-4" />

                                </div>

                            </div>
                                    </div>))} 

                        </div>









                         <div className="col-4" >
                         <PriceBuy pricetotal={order.total}/>
                        </div>   
                        
   
 

    
                       
                    </div>


                </div>

            </div>
        </React.Fragment>
    )
}
