import { Typography } from '../../components/Typography'
import { Line } from '../../components/line/Line'
import classes from './Equipment.module.css'

export function Equipment() {
  return (
    <div className="wrapper">
      <div className={classes.equipment__wrapper}>
        <Typography variant="h1-green">Оборудование</Typography>
        <Line />
        <div className={classes.equipment__cardblock}>
          <Typography>
            Компания «Агро-инжиниринг ЮГ» предлагает комплексные решения в сфере
            хранения и переработки зерна. Современные технологии и многолетний
            опыт специалистов компании позволяют создавать эффективные и
            качественные продукты точно отвечающие потребностям наших клиентов.
          </Typography>
        </div>
      </div>
    </div>
  )
}
