import React from "react";

const Card = ({product}) => {
    return (
        <div className="card-body" key={product.id}>
            <img className="card-img" src={product.img} alt={product.alt} />
            <h2 className="card-title">{product.name}</h2>
            <p className="card-description">{product.desc}</p>
            <p className="card-price">{product.price}</p>
            <button className="card-delete">Delete</button>
        </div>
    )
}

export default Card;