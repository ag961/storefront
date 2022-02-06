import { Box } from "@mui/material";
import ItemCard from "./ItemCard";
import './products.scss';
import { connect } from 'react-redux';


function Products(props) {

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