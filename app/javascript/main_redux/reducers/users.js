import { INDEX_USER, SET_CURRENT_USER } from '../constants/users'
import { toast } from 'react-toastify';

const initialState = {
  users: [],
  currentUser: {},
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INDEX_USER: {
      return {...state, users: action.value}
    }
    case SET_CURRENT_USER: {
      if (action.value === undefined){
        toast.error(`Вы ввели неверные данные`, {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else{
        console.log(action.value)
        toast.success(`Здравствуйте, ${action.value.full_name}`, {
          position: "top-left",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }

      return {...state, currentUser: action.value}
    }
    default:{
      return state;
    }
  }
}

export default UserReducer