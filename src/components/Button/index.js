import { Container, Content } from './styles'

export default function Button ({ children, onPress, color }) {
  return (
    <Container onPress={onPress} color={color}>
      <Content>{children}</Content>
    </Container>
  )
}
