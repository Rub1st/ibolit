import React, { useEffect, useState } from 'react'
import SaleHistoryItem from './sale_history_item'
import './style.css'

import { connect } from 'react-redux'

const SaleHistory = (props) => {

  return(
    <div className='sale-history_position'>
      <div className='sale-history-header'>
        <h3>История продаж</h3>
      </div>
      <ul className='sale-history-list'>
        {
          props.sales.map(el => <li className='sale-history-item'>
            <SaleHistoryItem el={el}/>
          </li>)
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
    sales: state.products.sales,
  }),
  dispatch => ({
  })
)(SaleHistory)