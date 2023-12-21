import React from 'react'
import { TfiCheck } from "react-icons/tfi";



function ToDoList() {
    return (
       <div >
         <div className='todo_list_container'>
            <div className='' style={{marginLeft:'12px',}}>
            

            <h3 className='todo_list_text' style={{paddingTop:"8px"}}>To-Do List</h3>
       
        <div>
        <input className='todo_list_input' type="text" name="" id="" />
       
    <button className='todo_list_btn'><span className='todo_list_btn_icon'><TfiCheck/></span> <span className='todo_list_btn_text'>Add</span></button>
        </div>

<div className='checked_box'>
<div>
<input type="checkbox" name="" id="" />
<span className='checked_box_text'>Select All</span> 
</div>
<button className='todo_list_btn'><span className='todo_list_btn_icon'><TfiCheck/></span> <span className='todo_list_btn_text'>Done</span></button>
</div>


<div className='checked_box'>
<div>
<input type="checkbox" name="" id="" />
<span className='checked_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> 
</div>
<p className='checked_box_date'>Last Added: 10 sep 2022</p>
</div>

<div className='checked_box'>
<div>
<input type="checkbox" name="" id="" />
<span className='checked_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> 
</div>
<p className='checked_box_date'>Last Added: 10 sep 2022</p>
</div>

<div className='checked_box'>
<div>
<input type="checkbox" name="" id="" />
<span className='checked_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> 
</div>
<p className='checked_box_date'>Last Added: 10 sep 2022</p>
</div>

<div className='checked_box' style={{paddingBottom:'60px'}}>
<div>
<input type="checkbox" name="" id="" />
<span className='checked_box_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span> 
</div>
<p className='checked_box_date'>Last Added: 10 sep 2022</p>
</div>




        </div>
        </div>
       
       </div>
    )
}

export default ToDoList
