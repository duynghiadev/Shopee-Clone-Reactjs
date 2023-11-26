import counterReducer from './components/Counter/counter.slice'
import profileReducer from './components/Profile/profile.slice'

const rootReducer = {
  counter: counterReducer,
  profile: profileReducer
}

export default rootReducer
