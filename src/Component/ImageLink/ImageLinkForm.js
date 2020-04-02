import React from 'react';
import './ImageLink.css';



const ImageLinkForm= ({ onSearch ,onBtnClicked })=>{
    return(
    <div>
        <p className="f3">
            {'This smart brain will detect your face in your picture !'}

        </p>
        <div className="center">
            <div className="form center pa4 shadow-4 br3">
                <input type="text" className= "w-70 f4 pa2 br3" onChange = {onSearch}/>
                <button className="w-30 grow  pv2 white ma1 ph3 bg-light-purple"
                 onClick = {onBtnClicked}>Detect</button>
            </div>
       </div>
    </div>
    );
}
export default ImageLinkForm