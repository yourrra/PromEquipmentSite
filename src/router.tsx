import * as URLS from './constants/urls'
import { createBrowserRouter } from 'react-router-dom'
import { Main } from './pages/Main'
import { NotFound } from './pages/404'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { Equipment } from './pages/Equipment'
import { Objects } from './pages/Objects'
import { Services } from './pages/Services'
import { Root } from './Root'

export const router = createBrowserRouter([
  {
    path: URLS.MAIN,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: URLS.MAIN,
        element: <Main />,
      },
      {
        path: URLS.ABOUT,
        element: <About />,
      },
      {
        path: URLS.CONTACTS,
        element: <Contacts />,
      },
      {
        path: URLS.EQUIPMENT,
        element: <Equipment />,
      },
      {
        path: URLS.OBJECTS,
        element: <Objects />,
      },
      {
        path: URLS.SERVICES,
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
