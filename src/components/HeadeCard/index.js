import React from 'react'
import {Container, Title, BackButton, Image} from './styles'

export default function HeadeCard({title, onPress}) {
  const customOnChange = event => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <Container>
      {!!onPress && (
        <BackButton onPress={customOnChange}>
          <Image
            source={require('../../assets/Back.png')}
            resizeMode="contain"
          />
        </BackButton>
      )}

      <Title>{title ? title : `Drop Kid`}</Title>
    </Container>
  )
}
