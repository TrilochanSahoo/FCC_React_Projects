import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center">
      {items.map((item)=>{
        const {id, title, img, price, desc} = item
        return(
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title}></img>
            <div className="item-info">
              <header>
                <h3 >{title}</h3>
                <h4 className="price">${price}</h4>
              </header>
            <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
