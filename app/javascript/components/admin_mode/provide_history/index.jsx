import React, { useEffect, useState } from 'react'
import ProvideHistoryItem from './provide_history_item'
import './style.css'

import { connect } from 'react-redux'
import { IconButton } from '@material-ui/core'
import { Assistant } from '@material-ui/icons'

const ProvideHistory = (props) => {

  return(
    <div className='sale-history_position'>
      <div className='sale-history-header'>
        <h3>История поставок</h3>
        <IconButton>
          <Assistant/>
        </IconButton>
      </div>
      <ul className='sale-history-list'>
        {
          props.arrived_products.map(el => <li className='sale-history-item'>
            <ProvideHistoryItem el={el}/>
          </li>)
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
    arrived_products: state.products.arrived_products,
  }),
  dispatch => ({
  })
)(ProvideHistory)