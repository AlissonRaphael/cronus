import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.5
}))`
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 4px;
  border-radius: 24px;

  background-color: ${({ theme, color }) => color || theme.Colors.Primary300};
`

export const Icon = styled(Ionicons).attrs((props) => ({
  size: props.size || 22,
  name: props.name
}))`
  color: ${({ theme, color }) => color || theme.Colors.Primary800};
`