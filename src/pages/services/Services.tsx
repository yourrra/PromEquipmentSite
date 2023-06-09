import { Line } from '../../components/line/Line'
import { ServiceCard } from '../../components/serviceCard/ServiceCard'
import classes from './Services.module.css'

export function Services() {
  return (
    <div className="wrapper">
      <div className={classes.service__wrapper}>
        <h1 className={classes.service__title}>Услуги</h1>
        <Line />
        <div className={classes.service__cardblock}>
          <ServiceCard />
        </div>
      </div>
    </div>
  )
}
