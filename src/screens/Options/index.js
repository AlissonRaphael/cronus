import { useState } from 'react';

import { Screen, Layout, Header, Title, Main, Label } from './styles';
import Slider from '../../components/Slider';

export default function Options () {
  const [promodoroTime, setPromodoreTime] = useState()

  return <Screen>
    <Layout>
      <Header>
        <Title>Options</Title>
      </Header>
      <Main>
        <Label>Promodoro</Label>
        <Slider value={promodoroTime} onChange={setPromodoreTime} />
      </Main>
    </Layout>
  </Screen>
}
