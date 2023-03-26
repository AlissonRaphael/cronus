import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Circle = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background-color: ${({ theme, color }) => color || theme.Colors.Card4};

  align-items: center;
  justify-content: center;
`

export const Time = styled.Text`
  color: ${({ theme, color }) => color || theme.Colors.Primary};
  font-size: 38px;
  font-weight: bold;
`

export const ExpectedTime = styled.Text`
  margin-top: 10px;
  color: ${({ theme, color }) => color || theme.Colors.Primary600};
  font-size: 16px;
`