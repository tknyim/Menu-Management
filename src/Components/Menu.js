import React from "react";
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
                                key={product.id}
                                product={product}
                                setEditDataId={setEditDataId}
                                handleEditImg={handleEditImg}
                                handleEditName={handleEditName}
                                handleEditDesc={handleEditDesc}
                                handleEditPrice={handleEditPrice}
                                editFood={editFood}
                            />) : (
                            <Card
                                key={product.id}
                                product={product}
                                deleteFood={deleteFood}
                                editCardId={editCardId}
                            />)
                        }
                    </>
                )
            })}
        </form>
    )
};

export default Menu;