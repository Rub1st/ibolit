import React, { useEffect, useState } from 'react'
import ItemListItem from './item_list_item'
import './style.css'

import { connect } from 'react-redux'

const ItemList = (props) => {

  let filtered = props.products.filter(el => el.name.toLowerCase().includes(props.searchQuery.toLowerCase()) || props.searchQuery === '')
  .filter(el => el.count >= +props.minPrice && el.count <= +props.maxPrice)

  return(
    <div className='item-list_position'>
      <div className='item-list-header'>
        <h3>Список лекарств</h3>
      </div>
      <ul className='item-list-list'>
        {
          filtered.map(el =>
          <li key={el.id} className='item-list-item'>
            <ItemListItem el={el}/>
          </li>)
        }
      </ul>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
    products: state.products.products,
    searchQuery: state.products.searchQuery,
    minPrice: state.products.minPrice,
    maxPrice: state.products.maxPrice,
  }),
  dispatch => ({
  })
)(ItemList)