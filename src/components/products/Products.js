import { Box } from "@mui/material";
import ItemCard from "./ItemCard";
import './products.scss';
import { connect } from 'react-redux';


function Products(props) {
  return (
    <Box className="products">
      <h2>Products</h2>
      <Box className="products__list">
      {props.products.map((product, i) => props.activeCategory === product.category ? <ItemCard key={i} product={product}/> : '' )}  
      </Box>
    </Box>
  )
}


const mapStateToProps = (state) => {
  console.log('state', state.activeCategoryReducer)
  return {
    products: state.activeCategoryReducer.products,
    activeCategory: state.activeCategoryReducer.activeCategory
  }
}

export default connect(mapStateToProps)(Products);