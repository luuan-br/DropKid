import styled from 'styled-components/native'

export const Card = styled.View`
  background-color: #fbfbfb;
  width: 90%;
  height: ${({hidden}) => (hidden ? '140px' : '270px')};
  padding: 15px 20px;
  position: relative;
  border-radius: 13px;
  margin: 15px auto;
`
export const Title = styled.Text`
  font-size: 24px;
  color: #fce300;
  text-transform: capitalize;
  margin-bottom: 15px;
`

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #696969;
  text-transform: capitalize;
  margin-bottom: 10px;
`

export const HourText = styled.Text`
  font-size: 16px;
  color: #222;
`

export const DownCard = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fbfbfb;
  justify-content: center;
  border-radius: 13px;
`

export const Button = styled.TouchableOpacity`
  padding: 20px;
  display: ${({hidden}) => (hidden ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
`

export const TextButton = styled.Text`
  font-size: 16px;
  color: #222;
  padding: 2px;
  margin-left: 5px;
`

export const DropButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
`
