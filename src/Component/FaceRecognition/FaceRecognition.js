import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ ImageUrl,box })=>{
    return(
        
        <div className="center mt2">
            <div className="absolute mt2">
            <img id = "input-image"src={ ImageUrl} width='500px' height='auto' alt=""/> 
            <div className="bound-box" style = {{top:box.topRow,right: box.rightCol,left: box.leftCol,bottom:box.bottomRow}}></div>
        </div>
      </div>
    );
}
export default FaceRecognition