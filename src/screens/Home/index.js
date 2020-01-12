import React, {useState} from 'react'

import Header from '../../components/HeaderNavigation'
import Button from '../../components/ActionButton'
import ActionList from '../../components/ActionList'

import {getValue} from '../../store' // usar redux ou context

import {Container, Context, Image, Text} from './styles'

export default function Home({navigation}) {
  const [routes, setRoutes] = useState(getValue('routes'))

  const rendElemet = () => {
    if (routes.length > 0) {
      return (
        <Container>
          <ActionList data={routes} />
        </Container>
      )
    } else {
      return (
        <Context>
          <Image
            source={require('../../assets/sem-rotas.png')}
            resizeMode="contain"
          />
          <Text>Ops! você ainda não tem nenhuma rotas começe agora.</Text>
        </Context>
      )
    }
  }

  return (
    <>
      <Header title="Rotas" />
      {rendElemet()}
      <Button onPress={() => navigation.navigate('RegisterRoutes')} />
    </>
  )
}
