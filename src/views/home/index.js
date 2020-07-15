import React, { useState, useEffect } from 'react'
import { map } from 'lodash'
import { Box, Grid, CircularProgress, makeStyles } from '@material-ui/core'
import { DeleteModal, UpsertModal } from 'components'
import { ProductCard, ProductForm, Header } from './components'
import {
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct
} from './services'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    marginTop: theme.spacing(8),
    padding: theme.spacing(3)
  },
  loader: {
    alignItems: 'center',
    display: 'flex',
    height: `100vh`
  }
}))

const HomeScreen = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)

  const [isDeleting, setIsDeleting] = useState(false)

  const [reloadData, setReloadData] = useState(!false)

  const [selectedProduct, setSelectedProduct] = useState()

  const [isDeleteModalOpen, showDeleteModal] = useState(false)

  const [isEditModalOpen, showEditModal] = useState(false)

  const [isCreateModalOpen, showCreateModal] = useState(false)

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
  }, [reloadData])

  const onDeleteProduct = async () => {
    setIsDeleting(true)

    const response = await deleteProduct(selectedProduct.id)

    if (response.status === 200) {
      setReloadData(!reloadData)

      setIsDeleting(false)
    }
  }

  const onEditProduct = async values => {
    const response = await updateProduct(selectedProduct.id, values)

    if (response.status === 200) {
      setReloadData(!reloadData)
    }
  }

  const onCreateProduct = async values => {
    const response = await createProduct(values)

    if (response.status === 201) {
      setReloadData(!reloadData)
    }
  }

  const renderProducts = product => {
    return (
      <Grid item xs key={product.id}>
        <ProductCard
          product={product}
          onEdit={() => {
            setSelectedProduct(product)

            showEditModal(true)
          }}
          onDelete={() => {
            setSelectedProduct(product)

            showDeleteModal(true)
          }}
        />
      </Grid>
    )
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <Box className={classes.loader}>
          <CircularProgress size={60} />
        </Box>
      )
    }

    return (
      <>
        <Box className={classes.root}>
          <Grid container spacing={3}>
            {map(products, renderProducts)}
          </Grid>
        </Box>
        {isDeleteModalOpen && (
          <DeleteModal
            isOpen={isDeleteModalOpen}
            loading={isDeleting}
            onClose={() => showDeleteModal(false)}
            onConfirm={() => onDeleteProduct()}
            title="product"
            type={selectedProduct.name}
          />
        )}
        {isEditModalOpen && (
          <UpsertModal
            initialValues={selectedProduct}
            isOpen={isEditModalOpen}
            onClose={() => showEditModal(false)}
            onSubmit={onEditProduct}
            title={`Update ${selectedProduct.name}`}
          >
            <ProductForm />
          </UpsertModal>
        )}
        {isCreateModalOpen && (
          <UpsertModal
            isOpen={isCreateModalOpen}
            onClose={() => showCreateModal(false)}
            onSubmit={onCreateProduct}
            title="Create product"
            actionButtonLabel="create"
          >
            <ProductForm />
          </UpsertModal>
        )}
      </>
    )
  }

  return (
    <>
      <Header onCreate={() => showCreateModal(true)} />
      {renderContent()}
    </>
  )
}

export default HomeScreen
