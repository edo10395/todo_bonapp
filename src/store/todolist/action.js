import { GET_DATA, CREATE_DATA ,DELETE_DATA} from "./const";
import Swal from "sweetalert2";

export function deleteData(id) {
    console.log(id)
    return async (dispatch, getState) => {
        dispatch({ type: DELETE_DATA, payload: id })
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    };
}
export function createData(data) {
    return async (dispatch, getState) => {
        let dataReducer = await getState().todolist.data
       
        //max id
        const max = dataReducer.reduce(function (prev, current) {
            return (prev.id > current.id) ? prev.id : current.id
        }, 0)
        //current date
            const date = new Date(Date.now());
            const monthNames = [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
            ];
        
            let hrs = date.getHours();
            let amPm = hrs >= 12 ? "PM" : "AM";
            hrs = hrs ? hrs : "12";
            hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
        
            let min = date.getMinutes();
            min = min < 10 ? "0" + min : min;
        
            let day = date.getDate();
            const month = monthNames[date.getMonth()];
        
        // tutup current date
        dispatch({ 
            type: CREATE_DATA, 
            payload: { ...data, id: max > 0 ? max + 1 : 1, 
            createdAt:  `${hrs}:${min} ${amPm} ${day} ${month}` } 
        })
        Swal.fire(
            'INFORMASI',
            'Your file has been saved.',
            'success'
        )
    };
}
