import { FormControlLabel, Switch } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import "./TodoList.css";

export default function Form({ initialValue, setInitialValue, status }) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#e3b6fc", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        id="title"
        label="Title"
        type="text"
        fullWidth
        variant="standard"
        onChange={(e) => setInitialValue(p => ({ ...p, title: e.target.value }))}
        value={initialValue.title}
      />
      <TextField
        margin="dense"
        id="description"
        label="Description"
        type="text"
        fullWidth
        variant="standard"
        onChange={(e) => setInitialValue(p => ({ ...p, description: e.target.value }))}
        value={initialValue.description}
      />
    
        <TextField
          id="date"
          label="Date"
          fullWidth
          type="date"
          defaultValue={initialValue.date}
          style={{marginTop:'20px'}}
          onChange={(e) => setInitialValue(p => ({ ...p, date: e.target.value }))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      <div>
      
       <FormControlLabel
        control={
          <Switch checked={listOpen}  onChange={(e) => setListOpen(!listOpen)} name="antoine" />
        }
        label={(status) ? 'Change Color': 'Color'}
      />

       <ul className={`list_color ${listOpen || initialValue.color.length >0? "list_color_active" : ""}`}>
          {
              (listOpen || initialValue.color.length >0) ? 
              colors.filter((val) =>{
                if(listOpen){
                    return val
                }else if(val.toString().toLowerCase().includes(initialValue.color.toString().toLowerCase())){
                    return val
                }
            }).map((item, index) => (
                <li
                    key={index}
                    className="list_color_item"
                    style={{ backgroundColor: item }}
                    onClick={() => setInitialValue(p => ({ ...p, color: item }))}
                />
                ))
              : null
          }
        </ul>
        </div>
    </div>
  );
}