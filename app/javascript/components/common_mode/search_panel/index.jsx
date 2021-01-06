import React, { useEffect, useState } from 'react'
import './style.css'

import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { setMaxPrice, setMinPrice, setSearchQuery } from '../../../main_redux/actions/products'

const SearchPanel = (props) => {

  return(
    <div className='search-panel_position'>
      <div>
        <TextField label={'поиск лекарств'} onChange={(e) => props.setSearchQuery(e.target.value)} value={props.searchQuery}/>
      </div>
      <div className={'prices-filter_position'}>
        <TextField label={'мин. цена'} type={'number'} className='price-input' onChange={(e) => props.setMinPrice(e.target.value)} value={props.minPrice}/>
        <TextField label={'макс. цена'} type={'number'} className='price-input' onChange={(e) => props.setMaxPrice(e.target.value)} value={props.maxPrice}/>
      </div>
      <div>
        <Link to={'/'}>выход</Link>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
    searchQuery: state.products.searchQuery,
    minPrice: state.products.minPrice,
    maxPrice: state.products.maxPrice,
  }),
  dispatch => ({
    setSearchQuery: (item) => dispatch(setSearchQuery(item)),
    setMinPrice: (item) => dispatch(setMinPrice(item)),
    setMaxPrice: (item) => dispatch(setMaxPrice(item)),
  })
)(SearchPanel)