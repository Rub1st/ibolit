import { toast } from 'react-toastify';

const ErrorReducer = (action) => {
  toast.error(`${action.value.statusText} (${action.value.status})`, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export default ErrorReducer