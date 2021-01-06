import axios from 'axios'
import { throwErrors } from './errors';
import { toast } from 'react-toastify';

//index
export const getData = (path, setter) => (dispatch) => {
  axios.get(`http://localhost:3000/${path}`).then((response) => {
         dispatch(setter(response.data))
  }).catch((error) => dispatch(throwErrors(error.response)))
};

//create
export const postData = (obj, path, setter, message) => dispatch => {
  axios.post(`http://localhost:3000/${path}`, obj,{
    "Content-Type": "application/x-www-form-urlencoded",
  }).then(response => dispatch(setter(response.data, message))).catch((error) => dispatch(throwErrors(error.response)))
}

export const generateReport = (obj, path, setter, message) => dispatch => {
  axios.post(`http://localhost:3000/reports/1/${path}`, obj, {
    "Content-Type": "application/x-www-form-urlencoded",
  }).then(response => {
    toast.success(`отчет успешно создан`, {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }).catch((error) => dispatch(throwErrors(error.response)))
}

export const generatePreVaucher = (id, message) => dispatch => {
  axios.post(`http://localhost:3000/ordered_dishes/${id}/create_pre_vaucher`, {
    "Content-Type": "application/x-www-form-urlencoded",
  }).then(response => {
    toast.success(`пре-чек успешно создан`, {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }).catch((error) => dispatch(throwErrors(error.response)))
}