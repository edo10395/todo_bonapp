import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./detail.css";
import leftArrow from "../../assets/left-arrow.svg";
import addIcon from "../../assets/more.svg";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import { Input } from '@mui/material';

const Index = () => {
    let { id, name } = useParams();
    const [text, setText] = useState('Masukkan todo')

    console.log(id)
    return (
     
        <div className="main">
            <div className="container">
                <div className="innerContainer">
                    <div className='group'>
                        <h1>{name}</h1>
                    </div>

                    {/* add todo */}
                    <div className='group'>
                       <div className='addTodoContainer'>
                            <Input
                                className='addTodoInput'
                                value={text}
                                onChange = {e =>setText(e.target.value)}
                            />
                            <div className="button addButton">
                                <img
                                    src={addIcon}
                                    width={40}
                                    // onClick={() => props.deleteCard(props.item.id)}
                                />
                            </div>
                       </div>
                    </div>

                    {/* list todo */}
                    <div className='group'>
                       <div className='todo'>
                           <p>
                               <b>18-03-2022</b> : 
                                <p>Call moms</p>
                            </p>

                            <div className="button removeButton">
                                <div>
                                <img
                                    src={editIcon}
                                    width={20}
                                />
                                </div>
                                <div>

                                <img
                                    src={deleteIcon}
                                    width={20}
                                />
                                </div>

                               
                            </div>
                       </div>
                       

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Index;