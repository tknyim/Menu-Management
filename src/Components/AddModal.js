import React from "react";

const AddModal = ({closeFoodMod, handleAddImg, handleAddName, handleAddDesc, handleAddPrice, handleAddClick}) => {
    

    return (
        <div className="food-modbg">
            <div 
                className="food-modcon"
                onChange={e => {
                    e.preventDefault()
                }}
            >
                <h1 className="food-modhead">Create New Food Item</h1>
                <p className="food-modp">Paste the image URL below:</p>
                <input
                    className="food-modinput"
                    type="text"
                    name="query"
                    placeholder="URL to image"
                    onChange={handleAddImg}
                />
                <p className="food-modp">What is the name for this food:</p>
                <input
                    className="food-modinput"
                    type="text"
                    name="query"
                    placeholder="Name"
                    onChange={handleAddName}
                />
                <p className="food-modp">What is the description for this food:</p>
                <textarea
                    className="food-modinput"
                    name="query"
                    placeholder="Description"
                    onChange={handleAddDesc}
                />
                <p className="food-modp">What is the price for this food:</p>
                <input
                    className="food-modinput"
                    type="number"
                    name="query"
                    placeholder="Price (Don't need to add '$')"
                    onChange={handleAddPrice}
                />
                <div className="food-btncon">
                <button type="submit" className="food-submit" onClick={handleAddClick}>Submit</button>
                <button type="submit" className="food-cancel" onClick={()=>closeFoodMod(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
};

export default AddModal;