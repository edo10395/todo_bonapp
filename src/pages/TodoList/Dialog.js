import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Form from './Form';
import * as React from 'react';

export default function FormDialog({ handleClose, open, initialValue, setInitialValue, handleSave, datanew, handleDelete }) {
  // const [detail, setDetail] = React.useState(true)
  // React.useEffect(() => {
  //   if (datanew) {
  //     setDetail(false)
  //   }
  // }, [])

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
       
        <DialogContent>
            <Form 
              initialValue={initialValue} 
              setInitialValue={setInitialValue} 
            />
        </DialogContent>
        <DialogActions>
              <div>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}