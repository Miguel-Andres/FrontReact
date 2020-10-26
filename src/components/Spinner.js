import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from 'react-loader-spinner'
 export default class Spinner extends React.Component {
  //other logic
    render() {
     return(
        <React.Fragment>


        

      
              <Loader
         type="Bars"
         color="#9E41F5"
         height={450}
         width={400}
         timeout={5000} //3 secs
         style={{justifyContent:"center" ,display:"flex"}}
 
      />  

      
        
        
         </React.Fragment>
     );
    }
 }
