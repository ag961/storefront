import { Box, ButtonGroup, Button, Paper } from "@mui/material";
import './categories.scss';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/storeState';

function Categories(props) {
  console.log('props', props)
  return (
    <Box className="categories">
      <h2>Categories</h2>
      <Box className="categories__buttongroup">
        <Paper>
          <ButtonGroup variant="text" aria-label="categories">
            {props.categories.map((category, i) => <Button key={i} onClick={() => { props.changeActiveCategory(category.name) }}>{category.displayName}</Button>)}
          </ButtonGroup>
        </Paper>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  console.log('state', state.activeCategoryReducer)
  return {
    categories: state.activeCategoryReducer.categories
  }
}

const mapDisptachToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDisptachToProps)(Categories);
