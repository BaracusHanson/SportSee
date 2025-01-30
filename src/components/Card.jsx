/**
 * Card component to display nutritional information.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.apport - Nutritional information.
 * @param {string} props.apport.name - Name of the nutrient.
 * @param {string} props.apport.unit - Unit of measurement.
 * @param {number} props.apport.quantity - Quantity of the nutrient.
 * @param {string} props.apport.image - URL of the image representing the nutrient.
 * @returns {JSX.Element} The rendered Card component.
 */
import "../styles/card.css";
import PropTypes from "prop-types";

const Card = ({ apport }) => {
    const { name, unit, quantity, image } = apport;
    return (
        <article className="card-article">
            <div className="card-image-container">
                <img src={image} alt="" className="card-image" />
            </div>
            <div className="card-content">
                <h2 className="card-calories">{quantity}{unit}</h2>
                <p className="card-text">{name}</p>
            </div>
        </article>
    );
};

Card.propTypes = {
    apport: PropTypes.shape({
        name: PropTypes.string.isRequired,
        unit: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
