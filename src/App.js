import { AreaLogin } from './routes/AreaLogin/AreaLogin'
import { AreaLogada } from './routes/AreaLogada/AreaLogada'
import { Pagina404 } from './routes/Pagina404/Pagina404'

import { Route, Router, Routes } from 'react-router-dom'

import { GlobalStyle } from './styles/gobal'

function App() {
  return (
    <div className="App">
      <AreaLogin />
      {/* <Router>
        <Routes>
          <Route path="/" element={<AreaLogin />} />
          <Route path="/logada" element={<AreaLogada />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </Router> */}
      <GlobalStyle />
    </div>
  )
}

export default App
