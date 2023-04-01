import { createContext, useContext, useEffect, useState } from "react"

const TIMES = {
  promodoro: 1500000, // miliseconds
  break: 1500000 // miliseconds
}

const STEPS = {
  promodoro: 'promodoro',
  break: 'break',
  end: 'end',
}

const ACTIONS = {
  play: 'play',
  pause: 'pause',
  stop: 'stop'
}

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
  const [promodoroTime, setPromodoroTime] = useState(TIMES.promodoro)
  const [breakTime, setBreakTime] = useState(TIMES.break)

  const [action, setAction] = useState(ACTIONS.stop)
  const [step, setStep] = useState(STEPS.promodoro)

  const [customInterval, setCustomInterval] = useState()
  const [time, setTime] = useState(promodoroTime)

  useEffect(() => {
    if (time <= 0 && step === STEPS.promodoro) {
      setStep(STEPS.break)
      setTime(breakTime-1000)
    }

    if (time <= 0 && step === STEPS.break) {
      setStep(STEPS.promodoro)
      setTime(promodoroTime)
      stop()
    }
  }, [time])

  const play = () => {
    if (action !== ACTIONS.play) {
      setAction(ACTIONS.play)
      setCustomInterval(setInterval(() => {
        setTime(state => state - 1000)
      }, 1000))
    }
  }

  const pause = () => {
    if (action !== ACTIONS.pause) {
      setAction(ACTIONS.pause)
      clearInterval(customInterval)
    }
  }

  const stop = () => {
    if (action !== ACTIONS.stop) {
      setAction(ACTIONS.stop)
      clearInterval(customInterval)
      setTime(promodoroTime)
    }
  }

  const controls = () => {
    return {
      time, play, pause, stop, step,
      setPromodoroTime, promodoroTime,
      setBreakTime, breakTime
    }
  }

  return (
    <TimerContext.Provider value={controls()}>
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => {
  const createTimer = useContext(TimerContext)
  return createTimer
}
