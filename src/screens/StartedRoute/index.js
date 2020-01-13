import React, {useState} from 'react'
import {useNavigationParam} from 'react-navigation-hooks'

import Header from '../../components/HeaderNavigation'
import Button from '../../components/ActionButton'
import ChildrensList from '../../components/ChildrensList'

import {getValue} from '../../store' // usar redux ou context

import {Container, SubTitle, Context, Image, Text} from './styles'

export default function Home({navigation}) {
  const name = useNavigationParam('name')
  const [childrens, setChildrens] = useState(getValue(name))

  const rendElemet = () => {
    if (childrens != null) {
      return (
        <Container>
          <ChildrensList data={childrens} />
        </Container>
      )
    } else {
      return (
        <Container>
          <Context>
            <Image
              source={require('../../assets/sem-crianca.png')}
              resizeMode="contain"
            />
            <Text>
              Ops! você ainda não tem nenhuma criança(s) começe agora.
            </Text>
          </Context>
        </Container>
      )
    }
  }

  return (
    <>
      <Header title="Rotas" onPress={() => navigation.navigate('Home')} />
      <SubTitle>{name}</SubTitle>

      {rendElemet()}

      <Button onPress={() => navigation.navigate('RegisterChildren', {name})} />
    </>
  )
}
