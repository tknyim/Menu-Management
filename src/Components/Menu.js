import React, { useState } from "react";
import Card from "./Card";
import Edit from "./Edit";

const Menu = ({ data, deleteFood, editDataId, editFood, editCardId, setEditDataId, handleEditImg, handleEditName, handleEditDesc, handleEditPrice}) => {

    return (
        <form className="card">
            {data.map((product) => {
                return (
                    <>
                        {editDataId === product.id ? (
                            <Edit
                                product={product}
                                setEditDataId={setEditDataId}
                                handleEditImg={handleEditImg}
                                handleEditName={handleEditName}
                                handleEditDesc={handleEditDesc}
                                handleEditPrice={handleEditPrice}

                            />) : (
                            <Card
                                key={product.id}
                                product={product}
                                deleteFood={deleteFood}
                                editCardId={editCardId}
                                editFood={editFood}
                            />)
                        }
                    </>
                )
            })}
        </form>
    )
};

export default Menu;