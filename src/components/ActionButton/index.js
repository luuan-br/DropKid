import React from 'react'

import {Container, ContextText} from './styles'

export default function ActionButton({Text, onPress}) {
  const customOnChange = event => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <Container onPress={customOnChange}>
      <ContextText>{Text ? Text : '+'}</ContextText>
    </Container>
  )
}
