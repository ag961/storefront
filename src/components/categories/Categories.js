import { Box, Button} from "@mui/material";
import './categories.scss';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/storeState';

function Categories(props) {
  return (
    <Box className="categories">
      <Box className="categories__buttongroup">
        {props.categories.map((category, i) => <Button
          key={i}
          sx={{
            "&.MuiButton-text:hover": { border: "1px white solid" },
            border: "1px transparent solid",
            borderRadius: 0,
            maxHeight: "2rem"
          }}
          color="inherit"
          onClick={() => { props.changeActiveCategory(category.name) }}>{category.displayName}</Button>)}
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.activeCategoryReducer.categories
  }
}

const mapDisptachToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDisptachToProps)(Categories);
