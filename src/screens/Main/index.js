import { Screen, Layout, Header, MainContainer, Footer } from './styles'

import Button from "../../components/Button"
import IconButton from '../../components/IconButton';
import Timer from '../../components/Timer';

export default function Main () {
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
          <Button>Iniciar</Button>
        </Footer>
      </Layout>
    </Screen>
  )
}
