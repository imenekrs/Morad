
import{BrowserRouter  , Routes ,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Pages from './pages/Pages'
import Search from './pages/Search'

function App() {
    
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>

      <Route path={'/'} element={<Search/>}/>
      <Route path={'/page/:p'} element={<Pages/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
