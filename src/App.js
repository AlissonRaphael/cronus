import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import light from './theme/light'
import Main from './screens/Main'

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Main />
    </ThemeProvider>
  );
}
