import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import light from './theme/light'

import { TimerProvider } from './context/Timer'
import Routes from './router/Routes';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <TimerProvider>
        <Routes />
      </TimerProvider>
    </ThemeProvider>
  );
}
