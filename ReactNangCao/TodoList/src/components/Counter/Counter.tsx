import React, { useReducer, useState } from 'react'
import reducer, { init, initialState, log } from '../../reducer/reducer'
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from '../../reducer/actions'

export default function Counter() {
  // const [state, setState] = useState<{ age: number }>({ age: 26 })

  const [state, dispatch] = useReducer(log(), initialState, init)

  const increaseAge = () => {
    dispatch(increaseAgeAction())
    // const nextState = reducer(state, increaseAgeAction())
    // console.log(nextState.age)
  }

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
  }

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <>
      <button onClick={decreaseAge} style={{ color: 'red' }}>
        Decrease age
      </button>
      <p>Hello! You are {state.age}.</p>
      <button onClick={increaseAge} style={{ color: 'green' }}>
        Increment age
      </button>

      <button onClick={() => increaseXAge(3)} style={{ color: 'blue' }}>
        Increment X age
      </button>
    </>
  )
}
