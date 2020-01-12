import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #ffcf00;
  width: 100%;
  height: 70px;
  position: relative;
  justify-content: center;
`
export const Title = styled.Text`
  color: #222;
  font-size: 20;
  font-weight: 700;
  text-align: center;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  /* background-color: red; */
  z-index: 10;
`

export const Image = styled.Image`
  width: 30px;
  height: 30px;
`
