import React, {useState} from 'react';
import Menu from './Components/Menu';
import AddFood from './Components/AddFood';
import AddModal from './Components/AddModal';
import './App.css';

const App = () => {
  const [openFood, setOpenFood] = useState(false);

  return (
    <div>
      {openFood && < AddModal 
                closeFoodMod={setOpenFood}
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
        <Menu />
      </div>
    </div>
  )
};



export default App;
