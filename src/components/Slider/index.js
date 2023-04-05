import { SliderStyles } from './styles'

export default function Slider ({ value, onChange }) {
  return <SliderStyles
    onValueChange={(value) => onChange(value.toFixed(2))}
    value={value}
    maximumValue={50}
    minimumValue={1}
  />
}
