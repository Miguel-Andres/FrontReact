import React ,{useState} from 'react'

import {ButtonGroup,Button} from "react-bootstrap"



export default function ButtonCount(props) {

 const[count , setCount] = useState(props.quantity)
    const suma =()=>{
    
        return setCount(count + 1)
       
       }
       const resta =()=>{
       
         return setCount (count > 1? count-1 : count)
         
       
       }




    return (
        <React.Fragment>
          <ButtonGroup  >
            <Button variant="light" onClick={resta} > - </Button>
                                   
            <Button variant="light" >  {count}   </Button>
      
            <Button variant="light"  onClick={suma}> + </Button>
                                  
        </ButtonGroup>
        </React.Fragment>
    )
}
