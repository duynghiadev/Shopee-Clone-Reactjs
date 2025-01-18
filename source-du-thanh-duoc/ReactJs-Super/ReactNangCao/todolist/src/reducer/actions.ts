export type ActionType = DecreaseAgeAction | IncreaseAgeAction | IncreaseXAgeAction

type IncreaseAgeAction = { type: 'increase_age' }
type DecreaseAgeAction = { type: 'decrease_age' }
type IncreaseXAgeAction = { type: 'increase_xage'; payload: number }

export const increaseAgeAction = () => {
  return { type: 'increase_age' } as IncreaseAgeAction
}

export const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAgeAction
}

export const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_xage', payload } as IncreaseXAgeAction
}
