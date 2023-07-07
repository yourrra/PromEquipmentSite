import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
// import UserFactory from './factory/userFactory'

import './styles/global.css'
import './styles/reset.css'

// export const Context = createContext('')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Context.Provider value={{ auth: new UserFactory() }}> */}
    <RouterProvider router={router} />
    {/* </Context.Provider> */}
  </React.StrictMode>,
)
