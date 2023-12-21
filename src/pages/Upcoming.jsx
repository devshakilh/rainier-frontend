import React from 'react';
import './Home.css'
import Time from './Time';


const Upcoming = () => {
    return (
        <div className='appointments_container'>
            <div > 
            <h1 className='appointments_text'>Upcomig Appointments</h1>

        </div>

<div className='appointment_container'>
<div>
    <Time/>
    </div>
<div >
<div className='appointment_date'>
{/* <div><p className='appointment_year'>2023 </p> <p className='appointment_year'>12</p> <p className='appointment_year'>Sep</p></div> */}

</div>
</div>

</div>
        </div>
    );
};

export default Upcoming;