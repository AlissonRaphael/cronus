import styled from "styled-components/native";
import { NativeModules } from 'react-native';

const { StatusBarManager: { HEIGHT: StatusBarHeight } } = NativeModules

export const Screen = styled.View`
  flex: 1;
  background-color: rgb(0, 191, 255);
`

export const Layout = styled.View`
  padding: 32px;
  margin-top: ${() => StatusBarHeight}px;
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.Primary};
`

export const Main = styled.View`
  padding-top: 10px;
  flex: 1;
`

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.Primary300};
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
