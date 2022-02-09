import React from "react";

const Card = ({product, deleteFood, editCardId}) => {
    return (
        <div className="card-body" key={product.id}>
            <img className="card-img" src={product.img} alt={product.alt} />
            <h2 className="card-title">{product.name}</h2>
            <p className="card-description">{product.desc}</p>
            <div className="card-bottom">
                <p className="card-price">{product.price}</p>
                <button className="card-edit" onClick={(e)=>editCardId(e, product)}>Edit</button>
                <button className="card-delete" onClick={()=>deleteFood(product.id)}>Delete</button>
            </div>
            
        </div>
    )
}

export default Card;