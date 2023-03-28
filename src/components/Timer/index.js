import { useEffect, useState } from 'react'
import { Container, Circle, Time, ExpectedTime } from './styles'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export default function Timer ({}) {
  const formated = dayjs.duration(1500000).format('mm:ss')

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
