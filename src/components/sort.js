import React from 'react';



 function SortBar({ handleSortChange }) {
    const handleChange = (e) => {
      handleSortChange(e.target.value);
    };
  
    return (
      <div>
        <label htmlFor="sort-criteria">Sort by:</label>
        <select id="sort-criteria" onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    );
  }

 export default SortBar;