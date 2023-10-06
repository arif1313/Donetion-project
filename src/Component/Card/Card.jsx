
import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { title, image, category,button_background_colour,background_colour } = card;
    return (
        <div className=''>
            
            <div style={{ backgroundColor: background_colour }} className="card card-compact   rounded-lg">
                <figure><img className='h-48 w-full' src={image} alt="Shoes" /></figure>
                <div className="p-3">
              <div style={{ backgroundColor: button_background_colour }} className='my-3 border-none p-1 rounded font-medium w-fit' >{category}</div>
                    <p className='font-bold'>{title}</p>
                  
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;