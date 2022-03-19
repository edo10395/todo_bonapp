import React from "react";
import TextField from '@mui/material/TextField';
import "./header.css";
import sortIcon from "../../assets/ascending-sort.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
function header(props) {

  return (
    <div className="header">
        <TextField
            autoFocus
            margin="dense"
            id="search"
            label="Search Title & Description"
            type="text"
            style = {{width: 300}}
            variant="standard"
            onChange={(e) => props.setSearch(e.target.value)}
        />

        <div className="asc" onClick={() => props.setStatusSort('asc')} >
            <FontAwesomeIcon icon={faArrowDownAZ} />
            <p>Asc</p>
        </div>
        <div className="desc" onClick={() => props.setStatusSort('desc')} >
            {/* <img 
                src={sortIcon} alt="Search" 
                width={20}
                className="rotate"
                onClick={() => props.setStatusSort('desc')} 
            /> */}
            <FontAwesomeIcon icon={faArrowUpZA} />
            <p>Desc</p>
        </div>
    </div>
  );
}

export default header;
