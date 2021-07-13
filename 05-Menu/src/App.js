import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item)=>{
  return item.category
}))]

// console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category)=>{
    if(category==="all"){
      setMenuItems(items)
      return 
    }
    const newItems = items.filter((item)=>{
      return item.category===category
    })
    setMenuItems(newItems)

  }

  return (
    <menu>
      <div className="menu section">
        <header className="title">
          <h3>Our Menu</h3>
          <div className="underline"></div>
        </header>
        <section>
          <Categories category={categories} filterItems={filterItems}></Categories>
          <Menu items={menuItems}></Menu>
        </section>
      </div>
    </menu>
  )
}

export default App;
