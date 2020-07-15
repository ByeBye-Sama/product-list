import React, { useState, useEffect } from 'react'
import { map } from 'lodash'
import { CircularProgress, Grid, Box, makeStyles } from '@material-ui/core'
import { ProductCard, DeleteModal } from 'components'
import { getProducts, deleteProduct } from './services'

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

  const [isDeleting, setIsDeleting] = useState(false)

  const [selectedProduct, setSelectedProduct] = useState()

  const [isDeleteModalOpen, showDeleteModal] = useState(false)

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

  const removeProduct = async id => {
    setIsDeleting(true)

    const response = await deleteProduct(id)

    if (response.status === 200) {
      const newProducts = products.filter(product => product.id !== id)

      setProducts(newProducts)

      setIsDeleting(false)
    }
  }

  if (isLoading) {
    return <CircularProgress size={60} />
  }

  const renderProducts = product => {
    return (
      <Grid item xs key={product.id}>
        <ProductCard
          product={product}
          onDelete={() => {
            setSelectedProduct(product)

            showDeleteModal(true)
          }}
        />
      </Grid>
    )
  }

  return (
    <>
      <Box className={classes.root} height="100%" flexGrow="1" padding={3}>
        <Grid container spacing={3}>
          {map(products, renderProducts)}
        </Grid>
      </Box>
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          loading={isDeleting}
          onClose={() => showDeleteModal(false)}
          onConfirm={() => removeProduct(selectedProduct.id)}
          title="producto"
          type={selectedProduct.name}
        />
      )}
    </>
  )
}

export default HomeScreen
