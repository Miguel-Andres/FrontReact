import React from 'react'
import{Link, NavLink} from "react-router-dom"
import  { Nav,NavDropdown ,Navbar} from "react-bootstrap"
import '../App.css';
import CartIcon from './CartIcon';

export default function NavBar()  {

const style = {
    
    user:{
        margin :"5px",
        listStyle :"none" ,
        
    }
    
        
    
}
   
        return(

            <React.Fragment> 
                      
                    
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <NavLink to="/">
                    <Navbar.Brand > 
                        <div className="logo">
                            <img src="/image/logo.png"  width="250px" alt="logo" /> 
                        </div>                     
                  </Navbar.Brand></NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto navli ">
           <Nav.Link>< Link to={"/category/Tecnologia"} className="navli ">Tecnologia  </Link> </Nav.Link>
           <Nav.Link><NavLink to={"/category/deporte"} className="navli "> deporte   </NavLink> </Nav.Link>
                   
                        <NavDropdown title=" Algo Mas" id="collasible-nav-dropdown">
                    <NavDropdown.Item >Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><NavLink to={"/order"} className="navli ">Ver mi Compra</NavLink></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                    <Nav>
                  
                   
                    <ul className=" login container" style={style.user}>
                        <li >Login</li>
                        <li><input type="search" />  </li>
                        <li><Link className="navli " to={"/cart"}><CartIcon  /></Link></li>
                    </ul>

                   
                          
                    </Nav>

                     </Navbar.Collapse>
            </Navbar>
           


           


           
           

            </React.Fragment>
        )
    }



