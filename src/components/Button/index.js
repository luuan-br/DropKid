import React from 'react'

import {ContentButton, TextButton} from './styles'

const Button = ({onPress, children, ...props}) => {
  const customOnChange = event => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <ContentButton onPress={customOnChange} {...props}>
      <TextButton>{children}</TextButton>
    </ContentButton>
  )
}

export default Button
