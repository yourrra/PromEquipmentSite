// import * as URLS from './constants/urls'
import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { NotFound } from './pages/404'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Equipment } from './pages/Equipment'
import { Objects } from './pages/Objects'
import { Services } from './pages/Services'
import { Root } from './Root'
import { ROUTES } from './constants/urls'

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
        path: ROUTES.EQUIPMENT,
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
  // {
  //   path: URLS.ABOUT,
  //   element: <About />,
  // },
  // {
  //   path: URLS.CONTACTS,
  //   element: <Contacts />,
  // },
  // {
  //   path: URLS.EQUIPMENT,
  //   element: <Equipment />,
  // },
  // {
  //   path: URLS.OBJECTS,
  //   element: <Objects />,
  // },
  // {
  //   path: URLS.SERVICES,
  //   element: <Services />,
  // },
])
