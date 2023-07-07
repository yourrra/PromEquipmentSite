// import { Navigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Typography } from '../../components/Typography'
import classes from './Login.module.css'
// import { ROUTES } from '../../constants/urls'

export const Login = () => {
  // const { isAuth, setIsAuth } = useContext(AuthContext)

  // const login = event => {
  //   event.preventDefault()
  //   setIsAuth(true)
  //   localStorage.setItem('auth', 'true')
  // }

  return (
    <div className="wrapper">
      <div className={classes.login__wrapper}>
        <div className={classes.border}>
          <Typography variant="h2-green" className={classes.login__title}>
            Вход в панель администратора
          </Typography>
          <form>
            <div className={classes.input__wrapper}>
              <Input placeholder={'Введите логин'} />
              <Input type="password" placeholder={'Введите пароль'} />
            </div>
            <div className={classes.button}>
              <Button>Войти</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
