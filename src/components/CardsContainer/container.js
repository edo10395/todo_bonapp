import React from "react";

import Card from "../Cards/card";

import "./container.css";

function container(props) {

  return (
    <div className="card-container">
      <h2>Card</h2>
      <div className="card-container_cards custom-scroll">
      {props.data?.length > 0 ? (
          props.data.map((item) => (
            <Card
              key={item.id}
              item={item}
              deleteCard = {props.deleteCard}
              editCard = {props.editCard}
            />
          ))
        ) : (
          <h3>No Data Present</h3>
        )}
           {/* <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
          <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          />
           <Card
            // key={item.id}
            card={{
              text:'dsss',
              time:'4:32PM',
              color:'cyan'
            }}
          /> */}
          
      </div>
    </div>
  );
}

export default container;
