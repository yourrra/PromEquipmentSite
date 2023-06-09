import classes from './PhotoCard.module.css'

export const PhotoCard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card__img}>
        <img src="test-photocard.jpg" alt="Photo Card" />
      </div>
      <div className={classes.card__text}>
        <h3 className={classes.card__title}>Объект № 2</h3>
        <p className={classes.card__description}>
          город Краснодар, Краснодарский край
        </p>
      </div>
    </div>
  )
}
