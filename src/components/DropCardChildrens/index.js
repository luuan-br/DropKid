import React, {useState} from 'react'
import {Image} from 'react-native'

import {
  Card,
  Title,
  SubTitle,
  HourText,
  DropCard,
  Button,
  TextButton,
  DropButton,
} from './styles'

export default function DropCardChildrens({item}) {
  const [hidden, setHidden] = useState(true)

  function onHandlePhone() {
    // tratamento aqui da api totalVoice
    return
  }

  return (
    <Card hidden={hidden}>
      <Title>{item.name}</Title>
      <SubTitle>Responsável</SubTitle>
      <HourText>{item.responsible}</HourText>

      <DropButton onPress={() => setHidden(!hidden)}>
        <Image source={require('../../assets/Down.png')} />
      </DropButton>

      <DropCard>
        <Button hidden={hidden} onPress={() => onHandlePhone(item.phone)}>
          <Image source={require('../../assets/icone-confimar.png')} />
          <TextButton>Avisar chegada</TextButton>
        </Button>

        <Button hidden={hidden} onPress={() => setHidden(!hidden)}>
          <Image source={require('../../assets/icone-cancelar.png')} />
          <TextButton>Cancelar</TextButton>
        </Button>
      </DropCard>
    </Card>
  )
}
