import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import ItemList from './item_list'
import CreateProduct from './create_product'
import ProvideHistory from './provide_history'
import { connect } from 'react-redux'
import { getData } from '../../main_redux/actions/server_connections'
import { indexArrivedProducts, indexProducts, indexSales, setMaxPrice, setMinPrice, setSearchQuery } from '../../main_redux/actions/products'
import SearchPanel from './search_panel'
import './style.css'

const AdminMode = (props) => {

  useEffect(() => {
    props.set('products', indexProducts)
    props.set('arrived_products', indexArrivedProducts)
  }, []);

  return(
    <div className="common-mode_position">
      <div className='left-part_position'>
        <SearchPanel/>
        <ItemList/>
        <CreateProduct/>
      </div>
      <ProvideHistory/>
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
)(AdminMode)