import React from "react";

import deleteIcon from "../../assets/delete.svg";
import arrow from "../../assets/right-arrow.svg";
import edit from "../../assets/edit.svg";
import { NavLink } from 'react-router-dom';

import "./card.css";

function card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.item.color }}>
        <div className="card_header">
            <h3>{props.item.title}</h3>
            <img
                src={edit}
                alt="arrow"
                style={{width:'25px'}}
                onClick={() => props.editCard(props.item)}
            />
        </div>
        <p className="card_text">{props.item.description}</p>
        <p className="footer_text">{props.item.createdAt}</p>
        
        <div className="card_footer">
          <img
            src={deleteIcon}
            alt="DELETE"
            onClick={() => props.deleteCard(props.item.id)}
          />
           <NavLink to={`/idTodo/${props.item.id}`}>
              <img
                src={arrow}
                alt="arrow"
                style={{width:'30px'}}
              />
            </NavLink>
       
        </div>
    </div>
  );
}

export default card;
