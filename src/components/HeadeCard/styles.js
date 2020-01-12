import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #ffcf00;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 185px;
`

export const Title = styled.Text`
  color: #222;
  font-size: 30;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  z-index: 10;
  margin-top: 35px;
`

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`
