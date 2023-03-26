import { useEffect, useState } from 'react'
import { Container, Circle, Time, ExpectedTime } from './styles'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const ACTION = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
}

export default function Timer ({}) {
  const [time, setTime] = useState(1500000)
  const [action, setAction] = useState(ACTION.pause)

  useEffect(() => {
    let interval;

    if (action === ACTION.play) {
      interval = setInterval(() => { setTime((state) => state - 1000) }, 1000)
    }

    if (action === ACTION.pause) {
      clearInterval(interval)
    }

    if (action === ACTION.stop) {
      clearInterval(interval)
      setTime(0)
    }
  }, [action])

  useEffect(() => {
    if (time <= 0) {
      setAction(ACTION.stop)
    }
  }, [time])

  const formated = dayjs.duration(time).format('mm:ss')

  return (
    <Container>
      <Circle>
        <Time>
          {formated}
        </Time>
      </Circle>
      <ExpectedTime>25m / 05m</ExpectedTime>
    </Container>
  )
}
