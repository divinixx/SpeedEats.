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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        explicabo sint reiciendis eaque harum ea, animi id voluptatem nihil
        blanditiis itaque tempore quidem aliquam enim molestiae, ipsum error
        architecto dolorem.
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
