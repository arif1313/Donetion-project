
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Card = ({ card }) => {
    
    const { id,title, image, category,button_background_colour,background_colour, text_colour} = card;
   
    return (
        <NavLink to={`/DonationDetails/${id}`}> 
     <div className=''>
     <div style={{ backgroundColor: background_colour, color: text_colour} } className="card card-compact rounded-lg">
         <figure><img className='h-48 w-full' src={image} alt="Shoes" /></figure>
         <div className="p-3">
       <div style={{ backgroundColor: button_background_colour }} className='my-3 border-none p-2 rounded font-medium w-fit' >{category}</div>
             <p className='font-bold'>{title}</p>
           
         </div>
     </div>
 </div>
 </NavLink>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;