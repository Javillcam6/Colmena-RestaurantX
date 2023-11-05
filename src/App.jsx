import {  useRoutes, BrowserRouter } from 'react-router-dom'
import Menu from './components/shared/Menu';
import Reservation from './components/shared/Reservation';
import Home from './components/shared/Home'

const AppRouter = () => {

  const RoutesElements = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/menu", element: <Menu />},
    { path: "/reservation", element: <Reservation />}
  ]);

    return RoutesElements;
}


function App() {

  return (
    <>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>

  

    </>
  )
}

export default App
