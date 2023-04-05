import styled from "styled-components/native"

export const Container = styled.TouchableOpacity.attrs((props) => ({
  activeOpacity: 0.6
}))`
  align-items: center;
  justify-content: center;
  padding: 18px;
  margin: 4px;
  border-radius: 24px;
  width: 100%;

  background-color: ${({ theme, color }) => color || theme.Colors.Navigation};
`

export const Content = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.Primary};
`
