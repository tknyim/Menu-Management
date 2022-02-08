import React from "react";
import { productData } from "./Data";

const addItems = (items) => {
    const data = productData;

    for (let i = 0; i < items < amount; i++) {
        data.push({
            id: data.id,
            img: data.img,
            alt: 'product7-img',
            name: 'Herb Smoked Salmon',
            desc: 'salmon and order the steamed asparagus or chargrilled mixed vegetables and a plain baked potato as sides.',
            price: '$13.99'
        })
    }
}