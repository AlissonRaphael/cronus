import { useEffect, useMemo, useRef } from 'react'
import { Animated } from 'react-native'

import { Layout, Header, MainContainer, Footer } from './styles'

import IconButton from '../../components/IconButton'
import Timer from '../../components/Timer'

import { useTimer } from '../../Context/Timer'

export default function Main () {
  const { play, pause, stop, step, promodoroTime, breakTime, time, action } = useTimer()

  const interpolateTime = useMemo(() => step === 'promodoro' ? promodoroTime : breakTime, [step, promodoroTime, breakTime])
  const promodoroRange = useMemo(() => (['rgb(240, 128, 128)','rgb(240, 230, 140)','rgb(0, 206, 209)']), [])
  const breakRange = useMemo(() => (['rgb(240, 128, 128)','rgb(240, 230, 140)','rgb(0, 191, 255)']), [])

  const inputRange = useMemo(() => ([0, interpolateTime/2, interpolateTime]), [interpolateTime])
  const outputRange = useMemo(() => step === 'promodoro' ? promodoroRange : breakRange, [step, promodoroTime, breakTime])

  const animation = useRef(new Animated.Value(0)).current
  const color = animation.interpolate({ inputRange, outputRange })

  useEffect(() => {
    animation.setValue(time)
  }, [time])

  return (
    <Animated.View style={{ flex: 1, backgroundColor: color }}>
      <Layout>
        <Header>
          <IconButton name="add" {...PROPS} />
          <IconButton name="ios-settings-sharp" {...PROPS} />
        </Header>
        <MainContainer>
          <Timer/>
        </MainContainer>

        <Footer>
          <IconButton
            name="stop"
            onPress={stop}
            backgroundColor="rgba(240,128,128,0.8)"
            color="rgba(255,255,255,0.7)"
          />
          <IconButton
            name={action === 'play' ? 'pause' : 'play'}
            onPress={action === 'play' ? pause : play}
            {...PROPS}
          >
            {action === 'play' ? 'Pause' : 'Play'}
          </IconButton>
        </Footer>
      </Layout>
    </Animated.View>
  )
}

const PROPS = {
  backgroundColor: "rgba(0,0,0,0.1)",
  color: "rgba(255,255,255,0.7)"
}
