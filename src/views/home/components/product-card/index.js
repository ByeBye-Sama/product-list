import React from 'react'
import { upperCase } from 'lodash'
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    minWidth: theme.spacing(35)
  },
  media: {
    height: theme.spacing(18)
  },
  category: {
    color: '#909090',
    fontWeight: 'bold'
  }
}))

const ProductCard = props => {
  const { product, onDelete, onEdit } = props

  const { name, description, category, price } = product

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Box>
        <CardMedia
          className={classes.media}
          image="https://images.photowall.com/products/59504/mountain-view-1.jpg?h=699&q=85"
          title="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="right">
            $ {price.toFixed(2)}
          </Typography>
          <Divider />
          <Typography variant="caption" className={classes.category}>
            {upperCase(category)}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button color="primary" startIcon={<EditIcon />} onClick={onEdit}>
          Edit
        </Button>
        <Button color="secondary" startIcon={<DeleteIcon />} onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
