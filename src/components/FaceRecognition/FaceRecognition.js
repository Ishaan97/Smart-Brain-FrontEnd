import React from 'react';
import './FaceRecognition.css'


class FaceRecognition extends React.Component
{

    render()
    {
        const {imageUrl, box} = this.props;
        
        return(
           <div className="center ma">
               <div className="absolute mt2">
               <img id ="inputimage"alt = "facedetect" src={imageUrl} width="500px" height="auto"></img>
               <div className="bounding-box" style={{top: box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
               
           </div>
        );
    }
}

export default FaceRecognition;