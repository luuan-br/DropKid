import React, {useState} from 'react'

import Header from '../../components/HeadeCard'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {getValue, setValue} from '../../store' // usar redux ou context

import {Container} from './styles'

export default function RegisterRoutes({navigation}) {
  const [route, setRoute] = useState('')
  const [hour, setHour] = useState('')

  function onHandleRoute() {
    const data = [...getValue('routes'), {route, hour}]

    if (route && hour) {
      setValue('routes', data)
      navigation.navigate('Home')
    }
  }

  return (
    <Container>
      <Header
        title="Cadastro de Rotas"
        onPress={() => navigation.navigate('Home')}
      />
      <Card title="Digite as informações para começar.">
        <Input
          placeholder="Rota"
          value={`${route}`}
          maxLength={60}
          onChange={text => setRoute(text)}
        />
        <Input
          placeholder="Horário"
          value={`${hour}`}
          maxLength={10}
          onChange={text => setHour(text)}
        />
        <Button onPress={() => onHandleRoute()}>PRÓXIMO</Button>
      </Card>
    </Container>
  )
}
