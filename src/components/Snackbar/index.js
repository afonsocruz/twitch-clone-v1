import { useSnackbar } from '../../context/snackbar'

import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackbarComponent() {

    const { open, setOpen, duration, message, status } = useSnackbar();

    return (
        <>
            <Snackbar open={open} autoHideDuration={duration} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={status}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}