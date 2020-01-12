import React, {useState} from 'react'
import {FlatList, Image} from 'react-native'
import {useNavigation} from 'react-navigation-hooks'

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

export default function ActionList({data}) {
  const [hidden, setHidden] = useState(true)
  const navigation = useNavigation()

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Card hidden={hidden}>
          <Title>{item.route}</Title>
          <SubTitle>Horário</SubTitle>
          <HourText>{item.hour}</HourText>

          <DropButton onPress={() => setHidden(!hidden)}>
            <Image source={require('../../assets/Down.png')} />
          </DropButton>

          <DropCard>
            <Button
              hidden={hidden}
              onPress={() =>
                navigation.navigate('StartedRoute', {
                  name: item.route,
                })
              }>
              <Image source={require('../../assets/icone-confimar.png')} />
              <TextButton>Iniciar pecurso</TextButton>
            </Button>

            <Button hidden={hidden} onPress={() => setHidden(!hidden)}>
              <Image source={require('../../assets/icone-cancelar.png')} />
              <TextButton>Cancelar</TextButton>
            </Button>
          </DropCard>
        </Card>
      )}
      keyExtractor={(_, index) => `${index}`}
    />
  )
}
