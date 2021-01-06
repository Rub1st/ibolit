import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import ItemList from './item_list'
import CreateSale from './create_sale'
import SaleHistory from './sale_history'
import { connect } from 'react-redux'
import { getData } from '../../main_redux/actions/server_connections'
import { indexProducts, indexSales, setMaxPrice, setMinPrice, setSearchQuery } from '../../main_redux/actions/products'
import SearchPanel from './search_panel'
import './style.css'

const CommonMode = (props) => {

  useEffect(() => {
    props.set('sales', indexSales)
    props.set('products', indexProducts)
  }, []);

  console.log(props.users)

  return(
    <div className="common-mode_position">
      <div className='left-part_position'>
        <SearchPanel/>
        <ItemList/>
        <CreateSale/>
      </div>
      <SaleHistory/>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
  }),
  dispatch => ({
    set: (path, setter) => dispatch(getData(path, setter)),
  })
)(CommonMode)