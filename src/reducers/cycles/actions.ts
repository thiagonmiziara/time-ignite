import { ICycle } from './reducer'

/* eslint-disable no-unused-vars */
export enum EActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: EActionTypes.ADD_NEW_CYCLE,
    payload: { newCycle },
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: EActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: EActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
