import { FormControlLabel, Switch } from '@mui/material';
import TextField from '@mui/material/TextField';
import  React, {useState} from 'react';
import "./Form.css";

export default function Form({ initialValue, setInitialValue }) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#fcba03", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  console.log(listOpen+'list')
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
      <FormControlLabel
        control={
          <Switch checked={initialValue.status} onChange={(e) => setInitialValue(p => ({ ...p, status: e.target.checked }))} name="antoine" />
        }
        label="Status"
      />
      <div>
       <FormControlLabel
        control={
          <Switch checked={listOpen}  onChange={(e) => setListOpen(!listOpen)} name="antoine" />
        }
        label="Color"
      />
       <ul className={`list_color ${listOpen? "list_color_active" : ""}`}>
          {
              (listOpen) ? 
              colors.map((item, index) => (
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