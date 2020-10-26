import React ,{useEffect , useState} from 'react'
import {Card } from "react-bootstrap"
import{Link} from "react-router-dom"
import{getFirestore} from "../firebase/firebase"
import "../App.css"
import Spinner from "./Spinner"

export default function ItemList() {
const[loading,setLoading]= useState(false)
const [items,setItems] = useState([])


    useEffect(() => {

            
            setLoading(true)
            const db = getFirestore() ;
            const  itemCollection = db.collection("productos")
            
                
                itemCollection.get().then(item=>{
        
                  if(item.size ===0){
                      console.log("no hay nada ")
                  }
                    
                  setItems(item.docs.map(doc => {
                      //consulta de DOCUMENTO 
                    return {id: doc.id, ...doc.data()} }))

                 }).finally(()=>{
                     setLoading(false)
                 })
        
           
              
            
            
           
        }, [])
       

    useEffect(() => {
        console.log(items)
        
    }, [items])

    

 return (

     <React.Fragment>
          
            {loading? <Spinner/> :
          


          <div style={{display:"flex"  ,justifyContent:"center" ,}} className="container  ">
             <div className="col-12" style={{margin:"10px"}}>
          <div style={{backgroundColor:"#1f6f8b", margin:"10px" ,display:"flex",justifyContent:"center" ,border: "10px double #000000",borderRadius:"137px 4px 163px 190px" }}className="font" ><h2 >Todas las categorias </h2></div>
              <div className="row">
                  
            {items.map(item=>{
                return   <Card style={{ width: '15rem' ,margin :"10px" , backgroundColor:"#af2d2d"}} className="card" key={item.id}>
                        <Link to={`item/${item.id}`}><Card.Img className="mx-auto" variant="top" src={item.image}/></Link>
                        <Card.Body className="cartext" >
                            <Card.Title>{item.title}</Card.Title>
                             <Card.Text> Categoria :{item.categoryId} </Card.Text>
                             <Card.Text> precio :{item.price} </Card.Text>
                           
                        </Card.Body>
                    </Card>
            })}
            </div>
        </div>
        </div> }
        </React.Fragment>
    ) 
}
