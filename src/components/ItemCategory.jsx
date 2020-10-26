import React ,{useEffect , useState} from 'react'
import {getFirestore}from "../firebase/firebase"
import {useParams , Link} from "react-router-dom"
import {Card } from "react-bootstrap"
import Spinner from "./Spinner"

export default function ItemCategory() {

const[items,setItems] = useState([])
const [loading,setLoading] = useState(true)
let {id}= useParams()

//Este use efect se tiene que actualizar cada ves que cambiamos la categoria por que el id params no es el mismo
    useEffect(() => {

        setLoading(true)
    
        const db = getFirestore() ;
        const  itemCollection = db.collection("productos")
        const  category = itemCollection.where("categoryId","==",`${id}`)
    
        category.get().then(res=>{
               
                setItems(res.docs.map(doc => {
                    return ({id: doc.id, ...doc.data()});

                  }))
            
        }).finally(()=>{
            setLoading(false)
          })
        
        
       
    }, [id])
//despues de tener los datos de la categoria actualizamos la carga de los item 
    useEffect(() => {
     
        console.log(items)
    }, [items])



    return (
        <React.Fragment>
            {loading?<Spinner/>:
            <div style={{display:"flex"}}>
        {items.map(item=>{
            return   <Card style={{ width: '15rem' ,margin :"10px" , backgroundColor:"#af2d2d"}} className="card" key={item.id}>
                        <Link to={`/item/${item.id}`}><Card.Img className="mx-auto" variant="top" src={item.image}/></Link>
                        <Card.Body className="cartext" >
                            <Card.Title>{item.title}</Card.Title>
                             <Card.Text> Categoria :{item.categoryId} </Card.Text>
                             <Card.Text> precio :{item.price} </Card.Text>
                            
                           
                        </Card.Body>
                    </Card>
            })} 
            </div>
        
        }
        
        </React.Fragment>
    )
}
