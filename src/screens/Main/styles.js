import { NativeModules, Animated } from 'react-native';
import styled from "styled-components/native"

const { StatusBarManager: { HEIGHT: StatusBarHeight } } = NativeModules

export const Screen = styled(Animated.View)`
  flex: 1;
`

export const Layout = styled.View`
  padding: 20px;
  margin-top: ${() => StatusBarHeight}px;
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
