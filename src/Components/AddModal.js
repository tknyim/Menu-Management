import React from "react";

const AddModal = ({closeFoodMod}) => {

    return (
        <div className="food-modbg">
            <div 
                className="food-modcon"
                onSubmit={e => {
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
                />
                <p className="food-modp">What is the name for this food:</p>
                <input
                    className="food-modinput"
                    type="text"
                    name="query"
                    placeholder="Name"
                />
                <p className="food-modp">What is the description for this food:</p>
                <input
                    className="food-modinput"
                    type="text"
                    name="query"
                    placeholder="Description"
                />
                <p className="food-modp">What is the price for this food:</p>
                <input
                    className="food-modinput"
                    type="text"
                    name="query"
                    placeholder="Price"
                />
                <div className="food-btncon">
                <button type="submit" className="food-submit">Submit</button>
                <button type="submit" className="food-cancel" onClick={()=>closeFoodMod(false)}>Cancel</button>
                </div>
                
            </div>
        </div>
    )
};

export default AddModal;