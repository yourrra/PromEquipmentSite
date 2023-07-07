import { Typography } from '../../components/Typography'
import classes from './Admin.module.css'

export const Admin = () => {
  return (
    <div className="wrapper">
      <div className={classes.admin__wrapper}>
        <Typography variant="h1-green">Админка</Typography>
        <div className={classes.admin__cardblock}>
          Тут админка, но пока ее нет
        </div>
      </div>
    </div>
  )
}
