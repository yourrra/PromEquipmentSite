import { Navigate } from 'react-router-dom'
import { Typography } from '../../components/Typography'
import classes from './Admin.module.css'
import { ROUTES } from '../../constants/urls'
// import { useContext, useState } from 'react'
// import { Context } from '../../main'

export const Admin = () => {
  const isAuth = false

  // const { auth } = useContext(Context)

  return isAuth ? (
    <div className="wrapper">
      <div className={classes.admin__wrapper}>
        <Typography variant="h1-green">Админка</Typography>
        <div className={classes.admin__cardblock}>
          Тут админка, но пока ее нет
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={ROUTES.LOGIN} />
  )
}
