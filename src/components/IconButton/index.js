import { Container, Icon, Text } from './styles'

export default function IconButton ({ children, onPress, name, size, color, backgroundColor }) {
  return (
    <Container onPress={onPress} color={backgroundColor}>
      <Icon name={name} size={size} color={color}/>
      { children ? <Text>{children}</Text> : null }
    </Container>
  )
}
