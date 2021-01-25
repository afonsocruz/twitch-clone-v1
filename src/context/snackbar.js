import { createContext, useState, useContext } from 'react';

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
   const [open, setOpen] = useState(false); 
   const [duration, setDuration] = useState(6000);
   const [message, setMessage] = useState('');
   const [status, setStatus] = useState('');

   return (
       <SnackbarContext.Provider value={
            {
                open,
                setOpen,
                duration,
                setDuration,
                message,
                setMessage,
                status,
                setStatus
            }
       }>
           {children}
       </SnackbarContext.Provider>
   );
}

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    const { open, setOpen, duration, setDuration, message, setMessage, status, setStatus } = context;
    return { open, setOpen, duration, setDuration, message, setMessage, status, setStatus };
}

export default SnackbarProvider;