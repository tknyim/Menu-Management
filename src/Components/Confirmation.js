import React from "react";

const Confirmation = ({product, deleteFood, closeFoodMod}) => {
    return (
        <div key={product.id}>
            <div>
                <p>Are you sure you want to delete this item?</p>
                <button className="card-delete" onClick={() => deleteFood(product.id)}>Delete</button>
                <button type="submit" className="food-cancel" onClick={() => closeFoodMod(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default Confirmation;