import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Signup from './components/auth/Signup'





const appRouter = createBrowserRouter([
  {
    path: '/Home',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
 {
    path: '/Signup',
    element:<Signup/>
 },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path: '/Browse',
    element: <Browse />
  },
])

function App() {
 

  return (
    <>
{/* <div className='bg'>
<Navbar/>
</div> */}
<RouterProvider router={appRouter}/>
    </>
  )
}

export default App
