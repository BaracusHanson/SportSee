import "../styles/card.css";
import feu from "../assets/logo/feu.png";

const Card = () => {
return (
    <article className="card-article">
        <div className="card-image-container">
            <img src={feu} alt="" className="card-image" />
        </div>
        <div className="card-content">
            <h2 className="card-calories">587kcal</h2>
            <p className="card-text">calorie</p>
        </div>
    </article>
);
};

export default Card;
