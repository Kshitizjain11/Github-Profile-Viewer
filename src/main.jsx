import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Stats from './components/Stats.jsx'
import { SortProvider } from './context/SortContext.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element= {<App/>}  />
    <Route path='/profile' element={<Stats/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SortProvider>
    <RouterProvider router={router}/>
    </SortProvider>
  </StrictMode>,
)
