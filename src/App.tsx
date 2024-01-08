import { Provider } from 'react-redux'
import './App.css'
import GameScreen from './pages/GameScreen/GameScreen'
import { store } from './shared/store'
import PlayerStats from './pages/PlayerStats/PlayerStats'

function App() {

  return (
    <Provider store={store}>
      <PlayerStats />
      <GameScreen />
    </Provider>
  )
}

export default App
