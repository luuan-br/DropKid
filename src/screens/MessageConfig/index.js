import React, {useState} from 'react'

import Header from '../../components/HeadeCard'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'

import {getValue, setValue} from '../../store' //usar redux ou context

import {Container} from './styles'

export default function MessageConfig({navigation}) {
  const [message, setMessage] = useState(`${getValue('message')}`)

  function onHandleText(text) {
    setValue('message', text)
    setMessage(text)
  }

  return (
    <Container>
      <Header />
      <Card title="Digite a mensagem para os pais.">
        <Input
          placeholder="Mensagem"
          value={`${message}`}
          maxLength={200}
          onChange={text => onHandleText(text)}
        />
        <Button onPress={() => navigation.navigate('ValidationConfig')}>
          PRÓXIMO
        </Button>
      </Card>
    </Container>
  )
}
