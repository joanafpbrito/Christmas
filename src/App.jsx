import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import RootLayout from './root_components/RootLayout'
import HomePage from './pages/IndexHomePage'
import ErrorPage from './pages/IndexErrorPage'
import IndexCountDown from './pages/IndexCountDown'
import GiftList from './pages/IndexGiftList'
import PayitForward from './pages/IndexPayitForward'
import TotalContributions from './pages/IndexTotalContributions'


function App() {

  const [count, setCount] = useState(0);

  const ROUTER = createBrowserRouter([
    {path: "/count-down", element: <IndexCountDown/>},
    {path: "/", element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
        {path: "/", element: <HomePage/>},
        {path: "/gift-list", element: <GiftList/>},
        {path: "/pay-it-forward", element: <PayitForward/>},
        {path: "/total-contributions", element: <TotalContributions/>}
    ]}
  ]);


return (

  <RouterProvider router= {ROUTER}/>
  
);


  
}

export default App
