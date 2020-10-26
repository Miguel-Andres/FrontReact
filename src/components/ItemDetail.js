import React ,{useEffect , useState , useContext}from 'react'
import {CartContext} from "../context/CartContext"
import { useParams ,useHistory,Link}from "react-router-dom"
import {getFirestore} from "../firebase/firebase"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import{Button,ButtonGroup} from "react-bootstrap"




export default function ItemDetail() {
const MySwal = withReactContent(Swal)
  const history= useHistory()
  const {id} = useParams()
  const [cart, setCart  ] = useContext(CartContext)
  const [item, setitem] = useState([])
  const [count,setCount ] = useState(1)
  
   
  useEffect(() => {
    const db = getFirestore() ;
    const  itemCollection = db.collection("productos")
    const detail = itemCollection.doc(id)
    
   detail.get().then(doc=>{

      if(!doc.exists){
       MySwal.fire("NO EXISTE", `El item <b>${id}</b> NOT FUND`,"error").then(confir=> history.push("/"))
       
      }
    
         setitem({id:doc.id,...doc.data()})


    }).catch(err=>{
      console.log("error buscando items",err)
    }).finally(()=>{
      console.log("encontrados")
    })
      
   
       
  }, [id])

  useEffect(()=>{
  
    console.log(item)
  }
  ,[item])

  const suma =()=>{
    
    return setCount(count + 1)
    
   }
   const resta =()=>{
   
     return setCount (count > 1? count-1 : count)
      
   
   }


  const addtocart = ()=>{
       
    const updateCart = [...cart]
    
    // si existe devuelve el indice del elemento que busco, si no existe devuelve -1
    const updateItemIndex = updateCart.findIndex(selectProduct=> selectProduct.id === item.id)

    if(updateItemIndex < 0) {
      console.log("existe")
      //si no lo consigue lo ingresa a cart 
      updateCart.push({...item, quantity :1*count})
    }else{
      //si lo consigue actualiza
      console.log("lo agregamos")
      const updateItem ={
        ...updateCart[updateItemIndex]
      }
      updateItem.quantity++;
      updateCart[updateItemIndex] = updateItem;
    }
    setTimeout(() => {
      setCart(updateCart)
      console.log({cart: updateCart })
    }, 300);
   
  }

  

    
  useEffect(() => {
    console.log(count)
}, [count])

   

    return (
        <React.Fragment>
          {/*Section: Block Content*/}
      <section className="mb-5">
        <div className="row" style={{backgroundColor:"" , margin:"10px", padding:"30px"}}>
          <div className="col-md-6 mb-4 mb-md-0">
            

           
              <div className="row  mx-1" style={{backgroundColor:"", minHeight:"350px" ,}} >

                        
                    
                  <img src={item.image}  className="img-fluid  " alt={item.title} />             
                  
               
                
              </div>
            
          </div>

          <div className="col-md-6" style={{backgroundColor:""}}>
            <h5>{item.title}</h5>
             <p className="mb-2 text-muted text-uppercase small ">{item.categoryId}</p>
           
             
          
            <p><span className="mr-1"><strong> ${item.price}</strong></span></p>
           <p className="pt-1">{item.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatem minima optio doloremque nam ducimus quae deleniti facilis voluptas architecto?</p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  
                  
                  <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Stock :</strong></th>
                    <td>{item.stock}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="table-responsive mb-2">
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td className="pl-0 pb-0 w-25">Quantity</td>
                    
                  </tr>
                  <tr>
                    <td className="pl-0">
                      <div className="def-number-input number-input safari_only mb-0">
                   

                      <ButtonGroup  >
            <Button variant="light" onClick={resta} > - </Button>
                                   
            <Button variant="light" >  {count}   </Button>
      
            <Button variant="light"  onClick={suma}> + </Button>
                                  
              </ButtonGroup>
                      </div>
                    </td>
                    <td>
                     
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/cart"><button className="btn btn-primary btn-md mr-1 mb-2">Buy now</button></Link>
            <button  className="btn btn-light btn-md mr-1 mb-2" onClick={()=>addtocart(item)} ><i className="fas fa-shopping-cart pr-2" />Add to cart {count} </button>
          </div>
        </div>
      </section>
      {/*Section: Block Content*/}
           
        </React.Fragment>
    )
}
