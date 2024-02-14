

import {  RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from "./components/Header"

const router = createBrowserRouter([
    {
        element : <Header/>,
        children : [
            { path : '/', element : (<Home/>) },
            { path : '/about', element : (<About/>) },
            { path : '/profile', element : (<Profile/>) },
            { path : '/signin', element : (<SignIn/>) },
            { path : '/signup', element : (<SignUp/>) },
        ]
    }

])

function App() {
  return (<>
    <RouterProvider router={router}/>
  </>)
}

export default App
