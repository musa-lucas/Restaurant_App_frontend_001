import React, { useEffect, useState } from 'react';
import './MenuPage.css';
import axios from 'axios';

function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/v1/menu');
        console.log(res.data.message);
        setMenu(res.data.message); // ✅ set state here
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className='menu-container'>
      <div className='menu-card-container'>
        {menu.map((e, i) => (
          <div className='menu-card' key={e_id}>
            <div className='menu-card-left'>
              <h3>{e.name}</h3>
              <br />
              <p>{e.description}</p>
              <br />
              <p>{e.price}</p>
            </div>
            <div className="menu-card-right">
              {e.available ? "Available" : "out of stock"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
