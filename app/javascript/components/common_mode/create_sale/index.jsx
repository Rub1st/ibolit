import React, { useEffect, useState } from 'react'
import './style.css'

import { connect } from 'react-redux'
import { IconButton, MenuItem, Select, TextField } from '@material-ui/core'
import { Create } from '@material-ui/icons'
import { postData } from '../../../main_redux/actions/server_connections'
import { indexSales } from '../../../main_redux/actions/products'

const CreateSale = (props) => {

  const [productId, setProductId] = useState(null)

  const [count, setCount] = useState(1)

  return(
    <div className='create-sale_position'>
      <div>
        <p>выберите лекарство</p>
        <Select onChange={(e) => setProductId(e.target.value)}>
          {
            props.products.map(el =>
            <MenuItem key={el.id} value={el.id}>
              {el.name}
            </MenuItem>)
          }
        </Select>
      </div>
      <div>
        <TextField onChange={(e) => setCount(e.target.value)} type={'number'} value={count} label={'введите количество'}/>
      </div>
      <div>
        <IconButton onClick={() => props.post({ product_id: productId, count: count }, 'sales', indexSales)}>
          <Create/>
        </IconButton>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    users: state.users.users,
    products: state.products.products,
  }),
  dispatch => ({
    post: (obj, path, setter, message) => dispatch(postData(obj, path, setter, message)),
  })
)(CreateSale)