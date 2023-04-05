import { useMemo } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import { Container, Circle, Time, ExpectedTime } from './styles'
import { useTimer } from '../../context/Timer'

dayjs.extend(duration)

export default function Timer ({}) {
  const { time, promodoroTime, breakTime } = useTimer()

  const pTimer = useMemo(() => dayjs.duration(promodoroTime).format('mm'), [promodoroTime])
  const bTimer = useMemo(() => dayjs.duration(breakTime).format('mm'), [breakTime])

  const formated = dayjs.duration(time).format('mm:ss')

  return (
    <Container>
      <Circle>
        <Time>
          {formated}
        </Time>
      </Circle>
      <ExpectedTime>{pTimer}m / {bTimer}m</ExpectedTime>
    </Container>
  )
}
