import React from 'react';
import plusIcon from "../../assets/plus.png";
import "./sidebar.css";


function sidebar(props) {
  return (
    <div className="sidebar">
      <img 
        src={plusIcon} alt="Add" 
          onClick={() => props.handleClickOpenCreate()} 
      />
    </div>
  );
}

export default sidebar;