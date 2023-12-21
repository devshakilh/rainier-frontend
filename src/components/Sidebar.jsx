import React, { useState } from 'react';
import {
   
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    
    FaThList
}from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { CiHome } from 'react-icons/ci';
import { 
    IoMdSettings,
    IoMdAdd 
} from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import NavBar from './Nav';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<CiHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaClockRotateLeft />
        },
        {
            path:"/product",
            name:"Product",
            icon:<IoMdSettings  />
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<SlCalender/>
        }
    ]
    return (
        <div className="container">
           
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }

               <div className='Add'>
              <span className=''>
              <IoMdAdd  />
              </span>
              
               </div>
           </div>
           <main className='bg'>
           <NavBar/>
            {children}
           </main>
        </div>
    );
};

export default Sidebar;