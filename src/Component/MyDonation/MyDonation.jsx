

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const MyDonation = ({singleCard}) => {
     const {id,title, image, category,button_background_colour,background_colour, text_colour,price}= singleCard;
    return (
        <div>
          <div className='sm:block md:flex rounded-lg 'style={{background: background_colour}}>
            <div className='h-56 md:h-64 lg:h-56 lg:56 sm:w-full md:w-56  rounded-lg'>
                    <img className='w-full  h-full md:h-64 lg:h-56 rounded-l-lg'  src={image} alt="" />
            </div>
            <div className='p-5'>
            <div style={{ backgroundColor: button_background_colour ,color:text_colour }} className=' border-none py-1 px-2 rounded font-medium w-fit' >{category}</div>
                    <h1 className='text-2xl font-semibold my-2'> {title}</h1>
                    <h3 style={{color:text_colour} } className='mb-2 font-semibold text-lg'>$ {price}</h3>
                   <NavLink to={`/DonationDetails/${id}`}> <button className='normal-case btn text-white font-semibold my-2 text-lg rounded-md'style={{background: text_colour}}> View Details</button>
</NavLink>
            </div>
          </div>
        </div>
    );
};

MyDonation.propTypes = {
 singleCard:PropTypes.object   
};

export default MyDonation;