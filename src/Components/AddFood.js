import React from "react";

const AddFood = ({openFoodMod}) => {
    return (
        <div>
            <button type="button" className="food-addbtn" onClick={()=>openFoodMod(true)}>+ Food</button>
        </div>
    );
};

export default AddFood;