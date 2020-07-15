import React from 'react'
import { Form } from 'react-final-form'
import Content from './content'

const ModalWrapper = props => {
  const {
    children,
    initialValues,
    isOpen,
    onClose,
    onSubmit,
    actionButtonLabel,
    title,
    validate
  } = props

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      {formProps => {
        const { handleSubmit, pristine, submitting } = formProps

        return (
          <Content
            loading={submitting}
            disabled={pristine}
            onSubmit={event => handleSubmit(event)}
            isOpen={isOpen}
            title={title}
            onClose={onClose}
            actionButtonLabel={actionButtonLabel || 'Guardar'}
          >
            {children}
          </Content>
        )
      }}
    </Form>
  )
}

export default ModalWrapper
