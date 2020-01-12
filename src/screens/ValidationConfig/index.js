import React from 'react'

import Header from '../../components/HeadeCard'
import Card from '../../components/Card'
import Button from '../../components/Button'

import {getValue} from '../../store' //usar redux ou context

import {Container, Title, Text} from './styles'

export default function ValidationConfig({navigation}) {
  const phone = getValue('phone')
  const message = getValue('message')

  return (
    <Container>
      <Header />
      <Card title="Para continuar confirme seus dados.">
        <Title>Telefone</Title>
        <Text>{phone}</Text>
        <Title>Mensagem</Title>
        <Text>{message}</Text>
        <Button onPress={() => navigation.navigate('Home')}>CONFIRMAR</Button>
        <Button
          style={{backgroundColor: '#ccc'}}
          onPress={() => navigation.navigate('PhoneConfig')}>
          EDITAR
        </Button>
      </Card>
    </Container>
  )
}
