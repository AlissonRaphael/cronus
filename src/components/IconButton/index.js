import { Container, Icon } from './styles'

export default function IconButton ({ onClick, name, size, color, backgroundColor }) {
  return (
    <Container onClick={onClick} color={backgroundColor}>
      <Icon name={name} size={size} color={color}/>
    </Container>
  )
}
