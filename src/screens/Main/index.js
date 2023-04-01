import { Screen, Layout, Header, MainContainer, Footer } from './styles'

import Button from "../../components/Button"
import IconButton from '../../components/IconButton';
import Timer from '../../components/Timer';

import { useTimer } from '../../Context/Timer'

export default function Main () {
  const { play, pause, stop } = useTimer()

  return (
    <Screen>
      <Layout>
        <Header>
          <IconButton name="add" />
          <IconButton name="ios-settings-sharp" />
        </Header>
        <MainContainer>
          <Timer/>
        </MainContainer>

        <Footer>
          <Button onPress={() => play()}>Iniciar</Button>
          <Button onPress={() => pause()}>Pausar</Button>
          <Button onPress={() => stop()}>Parar</Button>
        </Footer>
      </Layout>
    </Screen>
  )
}
