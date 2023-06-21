import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/urls'
import classes from './Main.module.css'
import { Button } from '../../components/Button/Button'
import { Typography } from '../../components/Typography'
import { Input } from '../../components/Input'

export function Main() {
  return (
    <div className="wrapper">
      <div className={classes.main__wrapper}>
        <Typography className={classes.main__title} variant="h1-extra">
          Наша компания предлагает весь спектр работ по реализации оьъектов по
          хрпанению и переработке зерна
        </Typography>
        <div className={classes.card__wrapper}>
          <div className={classes.card}>
            <div className={classes.card__img}></div>
            <Link to={ROUTES.SERVICES} className={classes.card__link}>
              Проектирование любой сложности
            </Link>
          </div>
          <div className={classes.card}>
            <div className={classes.card__img}></div>
            <Link to={ROUTES.SERVICES} className={classes.card__link}>
              Строительно-монтажные работы
            </Link>
          </div>
          <div className={classes.card}>
            <div className={classes.card__img}></div>
            <Link to={ROUTES.SERVICES} className={classes.card__link}>
              Пусконаладочные работы
            </Link>
          </div>
        </div>

        <div className={classes.main__list}>
          <Typography variant="h2" className={classes.list__title}>
            Применение собственных разработок и анализ опыта эксплуатации
            предприятий по хранению и переработки растительного сырья позволяет:
          </Typography>
          <ul>
            <li>
              <Typography variant="big">
                достичь высокого качества хранимой и перерабатываемой продукции;
              </Typography>
            </li>
            <li>
              <Typography variant="big">
                достичь высокого качества хранимой и перерабатываемой продукции;
              </Typography>
            </li>
            <li>
              <Typography variant="big">
                достичь высокого качества хранимой и перерабатываемой продукции;
              </Typography>
            </li>
            <li>
              <Typography variant="big">
                достичь высокого качества хранимой и перерабатываемой продукции;
              </Typography>
            </li>
          </ul>
        </div>

        <div className={classes.main__contactblock}>
          <Typography variant="h2" className={classes.contactblock__title}>
            Заголовок
          </Typography>
          <div className={classes.contactblock__input_wrapper}>
            <Input placeholder="Введите ваше имя" />
            <Input placeholder="Введите ваш номер телефона" />
            <Input placeholder="Введите ваш адрес эл.почты" />
          </div>
          <div className={classes.contactblock__button_wrapper}>
            <Button type="submit">Test</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
