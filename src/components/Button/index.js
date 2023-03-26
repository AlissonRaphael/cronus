import { Container, Content } from './styles'

export default function Button ({ children, onClick, color }) {
  return (
    <Container onClick={onClick} color={color}>
      <Content>{children}</Content>
    </Container>
  )
}
