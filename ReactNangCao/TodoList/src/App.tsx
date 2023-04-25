import { useCallback, useMemo, useRef, useState } from 'react'
import Ads from './components/Ads'
import AutoInput from './components/AutoInput'
import Count from './components/Count'
import Counter from './components/Counter'
import Manager from './components/Manager'
import MouseTracker from './components/MouseTracker'
import ProductList from './components/ProductList'
import Slider from './components/Slider'
import TodoList from './components/TodoList'
import Watch from './components/Watch'
import Welcome from './components/Welcome'
import MainLayout from './layouts/MainLayout'
import { PositionType } from './components/MouseTracker/MouseTracker'
import User from './components/User'

// Chúng ta có thể để biến ở ngoài
// const renderAds = (value: PositionType) => <Ads {...value} visible

function App() {
  const [, render] = useState({})

  // Đây là cách sử dụng useRef

  const renderRef = useRef<any>((value: PositionType) => <Ads {...value} visible />)
  // Có 3 cách sử dụng React memo: useCallback, useMemo, useRef

  // Đây là cách sử dụng hook useCallback
  // const renderAds = useCallback((value: PositionType) => <Ads {...value} visible />, [])

  // Đây là cách sử dụng hook useMemo
  const renderAds = useMemo(() => {
    return (value: PositionType) => <Ads {...value} visible />
  }, [])

  return (
    <div>
      <TodoList />
      {/* <Watch /> */}
      {/* <Slider /> */}
      {/* <Count /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductList /> */}

      {/* <MainLayout>
        <Manager />
      </MainLayout> */}

      {/* <div>
        <button onClick={() => render({})}>Force Rerender</button>
      </div>
      <MouseTracker render={renderRef.current} /> */}
      {/* <Ads visible /> */}

      {/* <User /> */}
    </div>
  )
}

export default App
