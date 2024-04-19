import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

export default function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function CustomSnackbar({ open, handleClose, severity, message }) {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}
