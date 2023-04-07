import { createContext, ReactNode, useReducer, useState } from 'react'
import { cyclesReducer, EActionTypes, ICycle } from '../reducers/cycles'

interface ICreateNewCycleData {
  task: string
  minutesAmount: number
}

interface ICyclesContext {
  cycles: ICycle[]
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished(): void
  setSecondsPassed(seconds: number): void
  createNewCycle(data: ICreateNewCycleData): void
  interruptCurrentCycle(): void
}

interface ICyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as ICyclesContext)

export function CyclesContextProvider({
  children,
}: ICyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { activeCycleId, cycles } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: ICreateNewCycleData) {
    const id = String(new Date().getTime())

    const newCycle: ICycle = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    }

    dispatch({
      type: EActionTypes.ADD_NEW_CYCLE,
      payload: { newCycle },
    })

    setSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: EActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: { activeCycleId },
    })
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: EActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: { activeCycleId },
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
