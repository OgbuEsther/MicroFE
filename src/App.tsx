import React from 'react'
import {RouterProvider} from "react-router-dom"
import { MainRoutes } from './routes/Routes'

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRoutes} />
    </div>
  )
}

export default App