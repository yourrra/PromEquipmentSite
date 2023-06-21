import { Typography } from '../../components/Typography'
import { Line } from '../../components/line/Line'
import { PhotoCard } from '../../components/photoCard'
import classes from './Objects.module.css'

export function Objects() {
  return (
    <div className="wrapper">
      <div className={classes.objects__wrapper}>
        <Typography variant="h1-green">Объекты</Typography>
        <Line />
        <div className={classes.object__cardblock}>
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
        </div>
      </div>
    </div>
  )
}
