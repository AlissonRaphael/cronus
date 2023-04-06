import styled from "styled-components/native";
import Slider from "@react-native-community/slider";

export const Container = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SliderStyles = styled(Slider).attrs((props) => ({
  onValueChange: props. onValueChange,
  value: props.value,
  maximumValue: props.maximumValue,
  minimumValue: props.minimumValue
}))`
  width: 85%;
`

export const ValueStyles = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.Colors.Primary300};
  width: 15%;
`