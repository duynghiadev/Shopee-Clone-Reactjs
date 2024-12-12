import { ActionType } from './actions'

export const initalState = { age: 26 }

export const init = (initalArg: typeof initalState) => {
  return { ...initalArg, age: initalArg.age + 4 }
}

const reducer = (state: typeof initalState, action: ActionType) => {
  switch (action.type) {
    case 'increase_age':
      return { ...state, age: state.age + 1 }
    case 'decrease_age':
      return { ...state, age: state.age - 1 }
    case 'increase_xage':
      return { ...state, age: state.age + action.payload }
    default:
      throw Error('Invalid Action', action)
  }
}

export const log = () => {
  return (state: typeof initalState, action: ActionType) => {
    console.group(action.type)
    console.log('Previous state', state)
    const nextState = reducer(state, action)
    console.log('Next State', nextState)
    console.groupEnd()
    return nextState
  }
}

export default reducer
