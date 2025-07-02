import React, {useState} from 'react'
import Homee from '../pages/Homee.js';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "./Layout.css";
import Menus from './Menus/Menus.js';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    
  }

  return (
    <>
        <div className='sidebar-section'>
            <div className= {toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                <div className='sidebar-toggle-icons'>
                  
                    <p onClick={handleToggle}>
                      {
                        toggle ? (<MdKeyboardDoubleArrowRight size={30}/>) : (<MdKeyboardDoubleArrowLeft size={30} />)
                      }
                      
                    </p>
                      
                </div>
                <Menus toggle={toggle}/>
            </div>
            <div className='container'>
               <Homee/>
             </div> 
            </div>
    </>
  )
}

export default Layout
