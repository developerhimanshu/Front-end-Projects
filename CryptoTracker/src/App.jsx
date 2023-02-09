import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Exchanges from './Component/Exchanges'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Home from './Component/Home'
import Coins from './Component/Coins'
import CoinDetails from './Component/CoinDetails'

const App = ()=>{
  return(
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coins' element={<Coins/>} />
          <Route path='/exchanges' element={<Exchanges/>} />
          <Route path='/coin/:id' element={<CoinDetails/>} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App