import React from 'react';

const Categories = ({category, filterItems}) => {
  return(
    <div className="btn-container">
      
        {category.map((category,index)=>{
          return (
            <button key={index} type="button" className="filter-btn" onClick={()=>{filterItems(category)}}>
              {category}
            </button>
          )
        })
      }
    </div>
  )
};

export default Categories;
