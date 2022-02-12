import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveCategory } from '../../store/storeState';
import { fetchCategories } from '../../store/storeState';
// styling
import './categories.scss';
import { Box, Button } from "@mui/material";
//========================================


function Categories(props) {

  const categories = useSelector(state => state.activeCategoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('running useEffect');
    dispatch(fetchCategories);
  }, [dispatch])

  return (
    <Box className="categories">
      <Box className="categories__buttongroup">
        {categories.map((category, i) => <Button
          key={i}
          sx={{
            "&.MuiButton-text:hover": { border: "1px white solid" },
            border: "1px transparent solid",
            borderRadius: 0,
            maxHeight: "2rem"
          }}
          color="inherit"
          onClick={() => { dispatch(changeActiveCategory(category.name)) }}>{category.displayName}</Button>)}
      </Box>
    </Box>
  )
}

export default Categories;