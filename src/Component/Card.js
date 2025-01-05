import React from 'react';
import "./Card.css";
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendar } from '@awesome.me/kit-KIT_CODE/icons'




const Card = ({title, description, image}) => {
    return(
        <div>
        <div className='card-div'>
            <div className='card-img'>
                <img src={image} alt={title}></img>
            </div>
            <div className='card-main'>
                <h3>{title}</h3>
                <p className='new-date'>12 Nov 20023</p>
                <p className='new-date'>Inner Circular Road Hall Room</p>
                <p className='para'>{description}</p>
                <button className='new-btn'>Read More</button>
               
            </div>
            <br/>
            
            
        </div>
        <div className='empty-div'></div>
        </div>
    )
   
}
export default Card