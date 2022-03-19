import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from "../../components/CardsContainer/container";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import Dialog from './Dialog';
import { createData, deleteData, updateData} from '../../store/todolist/action';
import Swal from 'sweetalert2';
import * as moment from 'moment'
function Index() {

  const dispatch = useDispatch()
  const { data } = useSelector(state => state.todolist)
  
    const [search, setSearch] = useState('')
    const [statusSort, setStatusSort] = useState('')
    const [datanew, setNew] = useState(false)
    const [open, setOpen] = useState(false)

    let dataDefault = {
        id: 0,
        title: '',
        description: '',
        date: moment().format("YYYY-MM-DD"),
        color: false,
    }
    const [initialValue, setInitialValue] = useState(dataDefault)

    const handleClickOpenCreate = () => {
        setOpen(true);
        setNew(true)
    }
    const handleClose = () => {
        setOpen(false);
        setInitialValue(dataDefault)
        setNew(false)
    };
    const handleSave = () => {
        if (initialValue.id > 0) {
          dispatch(updateData(initialValue))
        } else {
          dispatch(createData(initialValue))
        }
        handleClose()
        setStatusSort('');
        setSearch('');

    }

    const deleteCard = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteData(id))
          }
        })
        handleClose()
    }

    const editCard = (data) => {
        setInitialValue(data)
        setOpen(true);
    }
    const sortAsc = () => {
        setStatusSort('asc');
    }
    const sortDesc = () => {
      setStatusSort('desc');
  }

  return (
        <div className="main">
          <Header
            setSearch  = {setSearch}
            sortAsc  = {sortAsc}
            sortDesc  = {sortDesc}
            setStatusSort = {setStatusSort}
          />
          <div className="Content">
              <Sidebar
                  handleClickOpenCreate = {handleClickOpenCreate}
              />
              <CardContainer
                  data={data}
                  deleteCard={deleteCard}
                  editCard={editCard}
                  search={search}
                  statusSort={statusSort}
              />
             
          </div>
          {
              open && <Dialog
                  handleClose={() => handleClose()}
                  open={open}
                  initialValue={initialValue}
                  setInitialValue={setInitialValue}
                  handleSave={() => handleSave()}
                  datanew={datanew}
              />
          }
        </div>
    );
}

export default Index;