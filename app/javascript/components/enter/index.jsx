import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import './style.css'

import { connect } from 'react-redux'
import { getData } from '../../main_redux/actions/server_connections'
import { indexUser } from '../../main_redux/actions/users'

const Enter = (props) => {

  useEffect(() => {
    props.set('users', indexUser)
  }, []);

  console.log(props.users)

  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  let currentUser = props.users.find(el =>  el.password === password)


  return(
    <div className="enter_window">
      <div className="enter_field">
        <h1 className="enter_label">I-bolit</h1>
        <div className="enter_note">Вход</div>
        <div className="enter_code" >
          <TextField label={'код'} value={code} onChange={(e) => setCode(e.target.value)}/>
        </div>
        <div className="enter_password">
          <TextField type={'password'} label={'пароль'} value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <Link to={ currentUser == undefined ? '/' : currentUser.user_role.name === 'Фармацевт' ? '/common_mode' : '/admin_mode'}>Войти</Link>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
  }),
  dispatch => ({
    set: (path, setter) => dispatch(getData(path, setter))
  })
)(Enter)