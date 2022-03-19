import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Form from './Form';
import * as React from 'react';

export default function FormDialog({ handleClose, open, initialValue, setInitialValue, handleSave, datanew, handleDelete }) {
  const [status, setStatus] = React.useState(true)
  React.useEffect(() => {
    if (datanew) {
      setStatus(false)
    }
  }, [])

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>{status ? 'Update' : 'Form'}</DialogTitle>
        <DialogContent>
            <Form 
              initialValue={initialValue} 
              setInitialValue={setInitialValue} 
            />
        </DialogContent>
        <DialogActions>
              <div>
              <Button onClick={handleClose}>Cancel</Button>
                {
                  (status) ? 
                   <Button onClick={handleSave}>Update</Button>
                   : 
                   <Button onClick={handleSave}>Save</Button>
                }
              </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}