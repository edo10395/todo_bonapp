import * as React from 'react';
import Card from "../Cards/card";
import "./container.css";

function container(props) {
  return (
    <div className="card-container">
        <h2>Card Todo App</h2>
      <div className="card-container_cards custom-scroll">
     
      {
        props.data?.length > 0 ? (
        props.data.filter((val) =>{
            if(props.search == ""){
                return val
            }else if(val.title.toString().toLowerCase().includes(props.search.toString().toLowerCase()) || val.description.toString().toLowerCase().includes(props.search.toString().toLowerCase())){
                return val
            }

        }).sort((a, b) => {
          if (props.statusSort === "asc") {
            return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
          }
          return a.date < b.date ? 1 : b.date < a.date ? -1 : 0;
        }).map((item) => (
            <Card
              key={item.id}
              item={item}
              deleteCard = {props.deleteCard}
              editCard = {props.editCard}
            />
          ))
        ) 
        : (<h3>No Data Present</h3>)
      }
      </div>
    </div>
  );
}

export default container;
