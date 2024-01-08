import { Provider } from 'react-redux'
import './App.css'
import GameScreen from './pages/GameScreen/GameScreen'
import { store } from './shared/store'
import PlayerStats from './pages/PlayerStats/PlayerStats'
import Shop from './pages/Shop/Shop'

function App() {

  return (
    <Provider store={store}>
      <PlayerStats />
      <div className='mainFrame'>
        <GameScreen />
        <Shop />
      </div>
    </Provider>
  )
}

export default App
