import { useMemo, useRef } from 'react'
import { Animated } from 'react-native'

import { Layout, Header, MainContainer, Footer } from './styles'

import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import Timer from '../../components/Timer'

import { useTimer } from '../../Context/Timer'

export default function Main () {
  const { play, pause, stop, step, promodoroTime, breakTime } = useTimer()

  const time = useMemo(() => step === 'promodoro' ? promodoroTime : breakTime, [step, promodoroTime, breakTime])

  const start = useMemo(() => step === 'promodoro' ? 'rgb(0, 206, 209)' : 'rgb(0, 191, 255)', [step])
  const medium = useMemo(() => 'rgb(240, 230, 140)', [])
  const end = useMemo(() => 'rgb(240, 128, 128)', [])

  const inputRange = useMemo(() => ([0, time/2, time]), [time])
  const outputRange = useMemo(() => ([start, medium, end]), [start, medium, end])

  const animation = useRef(new Animated.Value(0)).current
  const color = animation.interpolate({ inputRange, outputRange })

  const params = useMemo(() => ({ toValue: time, duration: time, useNativeDriver: false }), [time])

  const handlePlay = () => {
    Animated.timing(animation, params).start()
    play()
  }

  const handlePause = ()  => {
    Animated.timing(animation, params).stop()
    pause()
  }

  const handleStop = ()  => {
    Animated.timing(animation, params).reset()
    stop()
  }

  return (
    <Animated.View style={{ flex: 1, backgroundColor: color }}>
      <Layout>
        <Header>
          <IconButton
            name="add"
            backgroundColor="rgba(0,0,0,0.1)"
            color="rgba(255,255,255,0.7)"
          />
          <IconButton
            name="ios-settings-sharp"
            backgroundColor="rgba(0,0,0,0.1)"
            color="rgba(255,255,255,0.7)"
          />
        </Header>
        <MainContainer>
          <Timer/>
        </MainContainer>

        <Footer>
          <Button onPress={handlePlay}>Iniciar</Button>
          <Button onPress={handlePause}>Pausar</Button>
          <Button onPress={handleStop}>Parar</Button>
        </Footer>
      </Layout>
    </Animated.View>
  )
}
