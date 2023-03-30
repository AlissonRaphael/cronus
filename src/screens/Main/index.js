import { Screen, Layout, Header, MainContainer, Footer } from './styles'

import Button from "../../components/Button"
import IconButton from '../../components/IconButton';
import Timer from '../../components/Timer';

import { useTimer } from '../../Context/Timer'

export default function Main () {
  const { setAction, actions, action } = useTimer()

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
          <Button onPress={() => setAction(actions.play)}>Iniciar</Button>
          <Button onPress={() => setAction(actions.stop)}>Parar</Button>
        </Footer>
      </Layout>
    </Screen>
  )
}
