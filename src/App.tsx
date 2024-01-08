import { Provider } from 'react-redux'
import './App.css'
import GameScreen from './pages/GameScreen/GameScreen'
import { store } from './shared/store'

function App() {

  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  )
}

export default App
