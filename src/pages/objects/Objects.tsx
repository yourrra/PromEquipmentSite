import { Line } from '../../components/line/Line'
import { PhotoCard } from '../../components/photoCard/PhotoCard'
import classes from './Objects.module.css'

export function Objects() {
  return (
    <div className="wrapper">
      <div className={classes.objects__wrapper}>
        <h1 className={classes.objects__title}>Объекты</h1>
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
