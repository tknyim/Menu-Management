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

  const [editDataId, setEditDataId] = useState();

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

  const handleAddFood = (e) => {
    setData([...data, {
      id: foodId,
      img: foodImg,
      alt: foodName + "-prod",
      name: foodName,
      desc: foodDesc,
      price: "$" + foodPrice
    }]);
    setOpenFood(false);
  };

  const handleDeleteFood = (id) => {
    if (window.confirm("Are you sure you want to delete this item?") == true) {
      const newData = data.filter((item) => item.id !== id)
      setData(newData);
    } else {
      return (
        false
      )
    }
  };

  const handleEditCardId = (e, item) => {
    setEditDataId(item.id);
  }

  const handleEditFood = (e) => {
    const foundId = data.findIndex((item) => { return item.id == editDataId})
    data[foundId] = {
      img: foodImg || data[foundId].img,
      alt: foodName + "-edit",
      name: foodName || data[foundId].name,
      desc: foodDesc || data[foundId].desc,
      price: "$" + foodPrice || data[foundId].price
    };
    setData(data)
    setEditDataId(null);
  }


  return (
    <div>
      {openFood && < AddModal
        closeFoodMod={setOpenFood}
        handleAddImg={handleAddImg}
        handleAddName={handleAddName}
        handleAddDesc={handleAddDesc}
        handleAddPrice={handleAddPrice}
        addFood={handleAddFood}
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
          deleteFood={handleDeleteFood}
          editDataId={editDataId}
          editCardId={handleEditCardId}
          setEditDataId={setEditDataId}
          editFood={handleEditFood}
          handleEditImg={handleAddImg}
          handleEditName={handleAddName}
          handleEditDesc={handleAddDesc}
          handleEditPrice={handleAddPrice}
        />
      </div>
    </div>
  )
};



export default App;
