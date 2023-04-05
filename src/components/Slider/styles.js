import styled from "styled-components";
import Slider from "@react-native-community/slider";

export const SliderStyles = styled(Slider).attrs((props) => ({
  onValueChange: props. onValueChange,
  value: props.value,
  maximumValue: props.maximumValue,
  minimumValue: props.minimumValue
}))`

`