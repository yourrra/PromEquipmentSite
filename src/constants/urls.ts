enum ROUTES {
  MAIN = '/',
  ABOUT = '/about',
  CONTACTS = '/contacts',
  OBJECTS = '/objects',
  SERVICES = '/services',
  ADMIN = '/admin',
  LOGIN = '/login',
}
const EQUIPMENT = (id = ':id') => `/equipment/${id}`

export { ROUTES, EQUIPMENT }
