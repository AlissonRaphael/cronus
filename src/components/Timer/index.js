import { Container, Circle, Time, ExpectedTime } from './styles'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

import { useTimer } from '../../Context/Timer'

export default function Timer ({}) {
  const { time } = useTimer()

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
