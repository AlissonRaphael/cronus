import { createContext, useEffect, useState } from "react"

const DEFAULT_TIME = {
  durationTime: 1500000, // miliseconds
  breakTime: 1500000 // miliseconds
}

const ACTION = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  break: 'break'
}

const TimerContext = createContext()

const useTimer = () => {
  const [_durationTime, setDurationTime] = useState(DEFAULT_TIME.durationTime)
  const [_breakTime, setBreakTime] = useState(DEFAULT_TIME.breakTime)
  const [_action, setAction] = useState(ACTION.pause)

  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    setCurrentTime(_durationTime)
  }, [])

  useEffect(() => {
    let interval;

    if (_action === ACTION.play) {
      interval = setInterval(() => { setTime((state) => state - 1000) }, 1000)
    }

    if (_action === ACTION.pause) {
      clearInterval(interval)
    }

    if (_action === ACTION.stop) {
      clearInterval(interval)
      setTime(0)
    }

    if (_action === ACTION.break) {
      clearInterval(interval)
      setTime(0)
    }
  }, [_action])

  useEffect(() => {
    if (currentTime <= 0) {
      setAction(ACTION.break)
    }
  }, [currentTime])
}

const TimerProvider = ({ children }) => {
  return (
    <TimerContext.Provider>
      {children}
    </TimerContext.Provider>
  )
}


export default {
  TimerProvider,
  useTimer
}