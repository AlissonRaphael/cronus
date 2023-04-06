import { useState } from 'react';

import { Screen, Layout, Header, Title, Main, Label } from './styles';
import Slider from '../../components/Slider';

export default function Options () {
  const [promodoroTime, setPromodoreTime] = useState(0)
  const [breakTime, setBreakTime] = useState(0)

  return <Screen>
    <Layout>
      <Header>
        <Title>Options</Title>
      </Header>
      <Main>
        <Label>Promodoro</Label>
        <Slider
          value={promodoroTime}
          onChange={setPromodoreTime}
          maximumValue={50}
          minimumValue={1}
        />

        <Label>Break</Label>
        <Slider
          value={breakTime}
          onChange={setBreakTime}
          maximumValue={30}
          minimumValue={1}
        />
      </Main>
    </Layout>
  </Screen>
}
