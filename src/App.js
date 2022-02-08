import React, { useState } from 'react';
import { productData } from "./Components/Data";
import Menu from './Components/Menu';
import AddFood from './Components/AddFood';
import AddModal from './Components/AddModal';
import './App.css';

const App = () => {
  const [data, setData] = useState(productData);
  const [openFood, setOpenFood] = useState(false);

  const [foodImg, setFoodImg] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodDesc, setFoodDesc] = useState("");
  const [foodPrice, setFoodPrice] = useState();

  const foodId = Math.round(Math.random() * (100 - 10 + 1) + 10);

  console.log(foodId);

  const handleAddImg = (e) => {
    setFoodImg(e.target.value);
  };
  const handleAddName = (e) => {
    setFoodName(e.target.value);
  };
  const handleAddDesc = (e) => {
    setFoodDesc(e.target.value);
  };
  const handleAddPrice = (e) => {
    setFoodPrice(e.target.value);
  };

  const handleAddClick = (e) => {
    setData([...data, {
      id: foodId,
      img: foodImg,
      alt: foodName + "-prod",
      name: foodName,
      desc: foodDesc,
      price: foodPrice
    }]);
    setOpenFood(false);
  }
  console.log(handleAddClick);
  console.log(data);


  return (
    <div>
      {openFood && < AddModal
        closeFoodMod={setOpenFood}
        handleAddImg={handleAddImg}
        handleAddName={handleAddName}
        handleAddDesc={handleAddDesc}
        handleAddPrice={handleAddPrice}
        handleAddClick={handleAddClick}
      />}
      <div className="menu">
        <h1>Food Menu</h1>
        <nav className="food-nav">
          <AddFood
            openFoodMod={setOpenFood}
          />
        </nav>
      </div>
      <div>
        <Menu
          data={data}
        />
      </div>
    </div>
  )
};



export default App;
