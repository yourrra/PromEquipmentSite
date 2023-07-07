// import * as URLS from './constants/urls'
import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/main/Main'
import { NotFound } from './pages/404/404'
import { About } from './pages/about/About'
import { Contacts } from './pages/contacts/Contacts'
import { Equipment } from './pages/equipment/Equipment'
import { Objects } from './pages/objects/Objects'
import { Services } from './pages/services/Services'
import { Root } from './Root'
import { ROUTES, EQUIPMENT } from './constants/urls'
import { Admin } from './pages/admin/Admin'
import { Authorization } from './pages/login/Login'

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <Main />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <Contacts />,
      },
      {
        path: EQUIPMENT(),
        element: <Equipment />,
      },
      {
        path: ROUTES.OBJECTS,
        element: <Objects />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
    ],
  },
  {
    path: ROUTES.ADMIN,
    element: <Admin />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Authorization />,
  },
])
