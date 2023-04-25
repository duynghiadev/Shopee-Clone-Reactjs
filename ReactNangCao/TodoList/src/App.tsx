import AutoInput from './components/AutoInput'
import Count from './components/Count'
import Counter from './components/Counter'
import Manager from './components/Manager'
import ProductList from './components/ProductList'
import Slider from './components/Slider'
import TodoList from './components/TodoList'
import Watch from './components/Watch'
import Welcome from './components/Welcome'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div>
      {/* <TodoList /> */}
      {/* <Watch /> */}
      {/* <Slider /> */}
      {/* <Count /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductList /> */}
      <MainLayout>
        <Manager />
      </MainLayout>
    </div>
  )
}

export default App
