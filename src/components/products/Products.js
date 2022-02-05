import { Box } from "@mui/material";
import ItemCard from "./ItemCard";
import './products.scss';
import { connect } from 'react-redux';


function Products(props) {
  return (
    <Box className="products">
      <h2>{props.activeCategory.toUpperCase()}</h2>
      <Box className="products__list">
      {props.filteredProducts.map((product, i) => <ItemCard key={i} product={product}/>)}  
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state.activeCategoryReducer)
  return {
    filteredProducts: state.productsReducer.filteredList,
    activeCategory: state.activeCategoryReducer.activeCategory
  }
}

export default connect(mapStateToProps)(Products);