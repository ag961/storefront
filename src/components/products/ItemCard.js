import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';



export default function itemCard(props) {

  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Image will go here
          </Typography>
          <Typography variant="h5" component="div">
          {props.product.name}
          </Typography>      
        </CardContent>
        <CardActions>
          <Button>Add to Cart</Button>
          <Button>View Details</Button>          
        </CardActions>
      </Card>
    </>
  )
}