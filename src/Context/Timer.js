import { createContext, useContext, useMemo, useEffect, useState } from "react"

const TIMES = {
  promodoro: 1500000, // miliseconds
  break: 1500000 // miliseconds
}

const STEPS = {
  promodoro: 'promodoro',
  break: 'break',
  end: 'end',
}

const createTimer = () => {
  const [promodoroTime, setPromodoroTime] = useState(TIMES.promodoro)
  const [breakTime, setBreakTime] = useState(TIMES.break)

  const [currentTime, setCurrentTime] = useState(promodoroTime)
  const [step, setStep] = useState(STEPS.promodoro)

  let interval;

  const handlePlay = () => {
    interval = setInterval(() => { setCurrentTime((state) => state - 1000) }, 1000)
  }

  const handlePause = () => {
    clearInterval(interval)
  }

  const handleStop = () => {
    clearInterval(interval)
    setCurrentTime(promodoroTime)
  }

  useEffect(() => {
    if (currentTime <= 0) {
      if (step === STEPS.promodoro) setStep(STEPS.break) && setCurrentTime(breakTime)
      if (step === STEPS.break) setStep(STEPS.promodoro) && handleStop()
    }
  }, [currentTime])

  return {
    time: currentTime,
    setPromodoroTime,
    setBreakTime,
    handlePlay,
    handlePause,
    handleStop
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
  const createTimer = useContext(TimerContext)()
  return createTimer
}
