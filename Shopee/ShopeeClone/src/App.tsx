import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return <div>{routeElements}</div>
}

export default App
