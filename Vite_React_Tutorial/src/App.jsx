import {BrowserRouter as Router, Link, Outlet, Route, Routes} from 'react-router-dom';

import './App.scss';

import Characters from './pages/Characters';
import Home from './pages/Home';

  function App() {
    return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />


        </Routes>
      </Router>
    </div>
  )

  function Dashboard () {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
      </nav>
      <Outlet />
    </>
  )
}


}

export default App 
