import React, { useState, useEffect } from 'react'
import { map } from 'lodash'
import { CircularProgress, Grid, Box, makeStyles } from '@material-ui/core'
import { ProductCard } from 'components'
import { getProducts } from './services'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    padding: theme.spacing(3)
  }
}))

const HomeScreen = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProducts()

      if (response.status === 200) {
        setProducts(response.data.products)

        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (isLoading) {
    return <CircularProgress size={60} />
  }

  const renderProducts = product => {
    const { id, name, description, category, price } = product

    return (
      <Grid item xs key={id}>
        <ProductCard
          name={name}
          description={description}
          category={category}
          price={price}
        />
      </Grid>
    )
  }

  return (
    <Box className={classes.root} height="100%" flexGrow="1" padding={3}>
      <Grid container spacing={3}>
        {map(products, renderProducts)}
      </Grid>
    </Box>
  )
}

export default HomeScreen
