import React from 'react'
import {useParams} from "react-router-dom"
import ItemCategory from './ItemCategory'


export default function Category() {
let {id}= useParams()

    return (
        <React.Fragment>
       
        <div className="container" >
        <div style={{backgroundColor:"#1f6f8b", margin:"10px" ,display:"flex",justifyContent:"center" ,borderRadius:"30%"}}className="font" ><h2 >categoria  <b>{id}</b> </h2></div>
            <ItemCategory/>
        </div>
        
        </React.Fragment>
    )
}
