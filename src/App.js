
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, CountryItems, SharedLayout, SingleItem} from './pages'
function App() {

  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/:country" element={<CountryItems/>}/>
                <Route path="/:country/:id" element={<SingleItem/>}/>
              </Route>
              <Route path="*" element={<div>Err</div>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App;
