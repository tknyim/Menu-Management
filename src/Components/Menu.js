import React from "react";
import { productData } from "./Data";
import Card from "./Card";

const Menu = () => {
   const data = productData;



    


    return (
        <div className="card">
            {data.map((product) => {
                return (
                    <Card key={product.id} product={product}/>
                )
            })}
        </div>
    )
};

export default Menu;