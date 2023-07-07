import { Typography } from '../../components/Typography'
import { Line } from '../../components/line/Line'
import classes from './equipment.module.css'

export function Equipment() {
  return (
    <div className="wrapper">
      <div className={classes.equipment__wrapper}>
        <Typography variant="h1-green">Оборудование</Typography>
        <Line />
        <div className={classes.equipment__cardblock}></div>
      </div>
    </div>
  )
}
