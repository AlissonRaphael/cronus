import { createContext, useContext, useState } from "react"

const TIMES = {
  promodoro: 1500000, // miliseconds
  break: 1500000 // miliseconds
}

const STEPS = {
  promodoro: 'promodoro',
  break: 'break',
  end: 'end',
}

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
  const [promodoroTime, setPromodoroTime] = useState(TIMES.promodoro)
  const [breakTime, setBreakTime] = useState(TIMES.break)

  const [step, setStep] = useState(STEPS.promodoro)

  const [customInterval, setCustomInterval] = useState()
  const [time, setTime] = useState(promodoroTime)

  const play = () => {
    setCustomInterval(setInterval(() => {
      setTime(state => {
        if (state <= 0 && step === STEPS.break) {
          setStep(STEPS.end)
          setTime(promodoroTime)
        }

        if (state <= 0 && step === STEPS.promodoro) {
          setStep(STEPS.break)
          setTime(breakTime-1000)
          stop()
        }

        return state - 1000
      })

    }, 1000))
  }

  const pause = () => {
    clearInterval(customInterval)
  }

  const stop = () => {
    clearInterval(customInterval)
    setTime(promodoroTime)
  }

  const controls = () => {
    return {
      time, play, pause, stop,
      setPromodoroTime,
      setBreakTime,
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
