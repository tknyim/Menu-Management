import React from "react";
import Card from "./Card";

const Menu = ({data}) => {

    return (
        <div className="card">
            {data.map((product) => {
                return (
                    <Card 
                        key={product.id} 
                        product={product}
                    />
                )
            })}
        </div>
    )
};

export default Menu;