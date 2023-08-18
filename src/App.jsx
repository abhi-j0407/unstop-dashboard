import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='container'>
      <Sidebar user='Admin' />
      <Main />
    </div>
  )
}

export default App
