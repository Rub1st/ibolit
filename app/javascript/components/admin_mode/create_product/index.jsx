import React, { useEffect, useState } from 'react'
import './style.css'

import { connect } from 'react-redux'
import { IconButton, MenuItem, Select, TextField } from '@material-ui/core'
import { Create } from '@material-ui/icons'
import { postData } from '../../../main_redux/actions/server_connections'
import { indexArrivedProducts, indexProducts, indexSales } from '../../../main_redux/actions/products'

const CreateProduct = (props) => {

  const [productId, setProductId] = useState(null)

  const [name, setName] = useState('');
  const [annotation, setAnnotation] = useState('-')
  const [price, setPrice] = useState(0)

  const [count, setCount] = useState(1)

  return(
    <div className='create-sale_position'>
      <div className='create-product'>
        <div className='create-product-row'>
          <div>
            <TextField onChange={(e) => setName(e.target.value)} type={'text'} value={name} label={'введите название'}/>
          </div>
          <div>
            <TextField onChange={(e) => setPrice(e.target.value)} type={'number'} value={price} label={'введите цену'}/>
          </div>
        </div>
        <div className='create-product-row'>
          <div>
            <TextField onChange={(e) => setAnnotation(e.target.value)} type={'text'} value={annotation} label={'введите аннотацию'}/>
          </div>
          <div>
            <IconButton onClick={() => props.post({ name: name, annotation: annotation, price: +price }, 'products', indexProducts)}>
              <Create/>
            </IconButton>
          </div>
        </div>
      </div>
      <div>
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
        </div>
        <div>
          <IconButton onClick={() => props.post({ product_id: productId, count: count }, 'arrived_products', indexArrivedProducts)}>
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
)(CreateProduct)