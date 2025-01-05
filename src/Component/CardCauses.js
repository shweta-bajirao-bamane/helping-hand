import React from 'react';
import "./Causes.css";


const CardCauses = ({title, description, image}) => {
    return(
        <div className='causes-div'>
            
                <img src={image} alt={title}></img>
           
            <div className='causes-main'>
                <h4>Reached 57% of $21000</h4>
                <h3>{title}</h3>
                
                <p>{description}</p>
                <button>Donate Now</button>
                
            </div>
            
            
        </div>
    )
}
export default CardCauses