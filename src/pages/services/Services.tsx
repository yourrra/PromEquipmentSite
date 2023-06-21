import { Typography } from '../../components/Typography'
import { Line } from '../../components/line/Line'
import { ServiceCard } from '../../components/serviceCard'
import classes from './Services.module.css'

export function Services() {
  return (
    <div className="wrapper">
      <div className={classes.service__wrapper}>
        <Typography variant="h1-green">Услуги</Typography>
        <Line />
        <div className={classes.service__cardblock}>
          <ServiceCard />
        </div>
      </div>
    </div>
  )
}
