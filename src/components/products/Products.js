import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Box } from "@mui/material";
import ItemCard from "./ItemCard";
import './products.scss';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/products';


function Products(props) {

const dispatch = useDispatch();

  useEffect(()=> {
    console.log('running useEffect')
    dispatch(fetchProducts)
  }, [dispatch])

  return (
    <Box className="products">
      <h2>{props.activeCategory.toUpperCase()}</h2>
      <Box className="products__list">
        {props.products.map((product, i) => {
          return props.activeCategory === product.category ? <ItemCard key={Math.random()} product={product} /> : ''
        })}
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {

  return {
    products: state.productsReducer.products,
    activeCategory: state.activeCategoryReducer.activeCategory
  }
}

export default connect(mapStateToProps)(Products);