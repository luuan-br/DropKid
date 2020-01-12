import React, {useState} from 'react'
import {useNavigationParam} from 'react-navigation-hooks'

import Header from '../../components/HeadeCard'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {getValue, setValue} from '../../store' // usar redux ou context

import {Container} from './styles'

export default function RegisterChildren({navigation}) {
  const scholl = useNavigationParam('name')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [responsible, setResponsible] = useState('')

  function onHandleRoute() {
    if (name && phone && responsible) {
      let data

      if (getValue(scholl)) {
        data = [...getValue(scholl), {name, phone, responsible}]
      } else {
        data = [{name, phone, responsible}]
      }

      setValue(scholl, data)
      navigation.navigate('StartedRoute', {name: scholl})
    }
  }

  return (
    <Container>
      <Header
        title="Cadastro de Rotas"
        onPress={() => navigation.navigate('StartedRoute', {name: scholl})}
      />
      <Card title="Digite as informações para começar.">
        <Input
          placeholder="Nome"
          value={`${name}`}
          maxLength={180}
          onChange={text => setName(text)}
        />
        <Input
          placeholder="Telefone"
          value={`${phone}`}
          maxLength={12}
          onChange={text => setPhone(text)}
        />
        <Input
          placeholder="Responsavel"
          value={`${responsible}`}
          maxLength={200}
          onChange={text => setResponsible(text)}
        />
        <Button onPress={() => onHandleRoute()}>PRÓXIMO</Button>
      </Card>
    </Container>
  )
}
