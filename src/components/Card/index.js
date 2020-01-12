import React from 'react'

import {Container, Content, Title} from './styles'

export default function Card({children, title}) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Container>
  )
}
