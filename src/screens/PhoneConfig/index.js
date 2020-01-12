import React, {useState} from 'react'

import Header from '../../components/HeadeCard'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {getValue, setValue} from '../../store' //usar redux ou context

import {Container} from './styles'

export default function PhoneConfig({navigation}) {
  const [tel, setTel] = useState(`${getValue('phone')}`)

  function onHandleText(text) {
    setValue('phone', text)
    setTel(text)
  }

  return (
    <Container>
      <Header />
      <Card title="Para começar digite o seu número.">
        <Input
          keyboardType="number-pad"
          placeholder="Telefone"
          value={`${tel}`}
          maxLength={12}
          onChange={text => onHandleText(text)}
        />
        <Button onPress={() => navigation.navigate('MessageConfig')}>
          PRÓXIMO
        </Button>
      </Card>
    </Container>
  )
}
