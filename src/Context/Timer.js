import { createContext, useContext, useMemo, useEffect, useState } from "react"

const TIMES = {
  promodoro: 1500000, // miliseconds
  break: 1500000 // miliseconds
}

const ACTIONS = {
  play: 'play',
  pause: 'pause',
  stop: 'stop'
}

const STEPS = {
  promodore: 'promodore',
  break: 'break',
  end: 'end',
}

const createTimer = () => {
  const [promodoroTime, setPromodoroTime] = useState(TIMES.promodoro)
  const [breakTime, setBreakTime] = useState(TIMES.break)

  const [currentTime, setCurrentTime] = useState(promodoroTime)

  const [action, setAction] = useState(ACTIONS.stop)
  const [step, setStep] = useState(STEPS.promodore)

  useEffect(() => {
    let interval;

    if (action === ACTIONS.play) {
      interval = setInterval(() => { setCurrentTime((state) => state - 1000) }, 1000)
    }

    if (action === ACTIONS.pause) {
      clearInterval(interval)
    }

    if (action === ACTIONS.stop) {
      clearInterval(interval)
      setCurrentTime(promodoroTime)
    }
  }, [action])

  useEffect(() => {
    if (currentTime <= 0) {
      if (step === STEPS.promodore) setStep(STEPS.break) && setCurrentTime(breakTime)
      if (step === STEPS.break) setStep(STEPS.promodore) && setAction(ACTIONS.stop)
    }
  }, [currentTime])

  return {
    time: currentTime,
    actions: ACTIONS,
    action,
    setAction,
    setPromodoroTime,
    setBreakTime
  }
}

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
  return (
    <TimerContext.Provider value={createTimer}>
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => {
  const createTimer = useContext(TimerContext)
  return createTimer()
}
