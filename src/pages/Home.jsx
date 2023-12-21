import React from 'react';
import './Home.css'
import BannerImg from '../assets/Svg_sample1.png'
import Icon from '../assets/Frame 2846.png'
import ToDoList from './ToDoList';
import Upcoming from './Upcoming';

const Home = () => {


    return (
  <div className='container'>
          <div>
            <div className='Home_Banner'>
           <div className='banner_container'>
          <div className='banner_img'>
          <img src={BannerImg} alt="" />
          </div>

<div className='banner_text_container'>
    <h1 className='banner_text'>Hello, Mary Jane!</h1>

<p className='banner_text_p'>Stay Up-to-Date with your appointments.</p>
<p className='banner_text_p_'>You Have No pending Reports</p>
</div>
           </div>
           




        </div>

        <div className='home_design_2'>
<div className='home_design_child'>
<img src={Icon} alt="" className='icon-img'/>
<h3 className='child_text'>Pulse Count</h3>
<div className='child_num_main'>
<p className='child_num'>60 bpm</p>
<div className='child_container'>

    <p className='child_menu_text'>Normal</p>
</div>
</div>
</div>
<div className='home_design_child'>
<img src={Icon} alt="" className='icon-img'/>
<h3 className='child_text'>Pulse Count</h3>
<div className='child_num_main'>
<p className='child_num'>60 bpm</p>
<div className='child_container'>

    <p className='child_menu_text'>Normal</p>
</div>
</div>
</div>
<div className='home_design_child'>
<img src={Icon} alt="" className='icon-img'/>
<h3 className='child_text'>Pulse Count</h3>
<div className='child_num_main'>
<p className='child_num'>60 bpm</p>
<div className='child_container'>

    <p className='child_menu_text'>Normal</p>
</div>
</div>
</div>
<div className='home_design_child'>
<img src={Icon} alt="" className='icon-img'/>
<h3 className='child_text'>Pulse Count</h3>
<div className='child_num_main'>
<p className='child_num'>60 bpm</p>
<div className='child_container'>

    <p className='child_menu_text'>Normal</p>
</div>
</div>
</div>
</div>


<ToDoList/>

        </div>
         <Upcoming/>
  </div>
    );
};

export default Home;