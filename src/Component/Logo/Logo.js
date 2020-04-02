import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import  './Logo.css'


const Logo = ()=>{
    return(
        <div className="ma4 ">
            <Tilt className="Tilt log" options={{ max : 20 }} style={{ height: 100, width: 120 }} >
                <div className="Tilt-inner"> <img style={{paddingTop:'20px'}} src={brain} alt = "logo"/></div>
            </Tilt>
        </div>
    );
}
export default Logo;