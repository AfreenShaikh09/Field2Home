function ProdCard({ image, name, price, description }) {
    return (
        <div className="prod-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <span>${price}</span>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProdCard;