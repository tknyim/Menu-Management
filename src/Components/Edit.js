import React from "react";

const Edit = ({product, editFood, setEditDataId, handleEditImg, handleEditName, handleEditDesc, handleEditPrice}) => {
    return (
        <div className="edit-body" 
            key={product.id}
            onChange={e => {
                e.preventDefault()
            }}
        >
            <div className="edit-img">
                <input
                    className="edit-iimg"
                    type="text"
                    name="img"
                    placeholder="URL to image"
                    onChange={handleEditImg}
                ></input>
            </div>
            <div className="edit-name">
                <input
                    className="edit-iname"
                    type="text"
                    name="name"
                    placeholder={`${product.name}`}
                    onChange={handleEditName}
                ></input>
            </div>
            <div className="edit-desc">
                <textarea
                    className="edit-idesc"
                    name="desc"
                    placeholder={`${product.desc}`}
                    onChange={handleEditDesc}
                ></textarea>
            </div>
            <div className="edit-bottom">
                <div className="edit-price">
                    <input
                        className="edit-iprice"
                        type="number"
                        name="price"
                        placeholder={`${product.price}`}
                        onChange={handleEditPrice}
                    ></input>
                </div>
                <button type="button" className="edit-save" onClick={editFood}>Save</button>
                <button type="button" className="edit-cancel" onClick={()=>setEditDataId(null)}>Cancel</button>
            </div>
        </div>
    )
}

export default Edit;