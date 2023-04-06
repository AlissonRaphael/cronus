import { Container, SliderStyles, ValueStyles } from './styles'

export default function Slider ({ value, onChange, maximumValue, minimumValue }) {
  return <Container>
    <SliderStyles
      onValueChange={(value) => onChange(value.toFixed())}
      value={value}
      maximumValue={maximumValue || 50}
      minimumValue={minimumValue || 1}
    />
    <ValueStyles>{String(value).length === 2 ? value : `0${value}`} min</ValueStyles>
  </Container>
}
