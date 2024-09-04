/* eslint-disable react/prop-types */
// import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';

const ExploreMenu = ({ category, setCategory }) => {
  // const navigate = useNavigate();
  return (
    <div className="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a wide range of mouth-watering dishes, from appetizers to
        desserts, all conveniently categorized for easy browsing. Customize your
        order with just a few clicks and satisfy your cravings with SpeedEats.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? 'active' : ''}
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
