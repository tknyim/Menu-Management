import React from "react";
import Card from "./Card";

const Menu = ({data, deleteFood}) => {

    return (
        <div className="card">
            {data.map((product) => {
                return (
                    <Card 
                        key={product.id} 
                        product={product}
                        deleteFood={deleteFood}
                    />
                )
            })}
        </div>
    )
};

export default Menu;