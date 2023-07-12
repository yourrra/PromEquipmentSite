import { ROUTES } from '../../constants/urls'
import classes from './footer.module.css'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className={classes.wrapper__background}>
      <div className="wrapper">
        <footer className={classes.footer}>
          <div className={classes.footer__logo}>
            <img
              className={classes.footer__logo_img}
              src="./Logo-wh.svg"
              alt="logo"
            />
            <p className={classes.footer__logo_title}>MMMMMM PPPPPP SSSSS</p>
            <p className={classes.footer__logo_description}>
              Завод «Спецэлеватормельмаш» обеспечивает надежной техникой
              клиентов уже не первый год, накапливая опыт, который помогает в
              реализации проектов любой сложности.
            </p>
            <p className={classes.footer__logo_rule}>
              Все права защищены. 2023 год.
            </p>
          </div>
          <nav className={classes.footer__nav}>
            <ul className={classes.footer__nav_wrapper}>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.MAIN}>
                  Главная
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.ABOUT}>
                  О Компании
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.SERVICES}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  className={classes.footer__nav_link}
                  to={ROUTES.EQUIPMENT}
                >
                  Оборудование
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.OBJECTS}>
                  Объекты
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.CONTACTS}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={classes.footer__nav}>
            <ul className={classes.footer__nav_wrapper}>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.MAIN}>
                  Конвейеры
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.ABOUT}>
                  Нории
                </Link>
              </li>
              <li>
                <Link className={classes.footer__nav_link} to={ROUTES.SERVICES}>
                  Гравитационное оборудование
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.footer__contact}>
            <div className={classes.footer__contact_connect}>
              <img src="./mail-icon-yl.svg" alt="mail-icon" />
              <a
                className={classes.footer__contact_link}
                href="mailto:example@gmail.com"
              >
                example@gmail.com
              </a>
            </div>
            <div className={classes.footer__contact_connect}>
              <img src="./phone-icon-yl.svg" alt="phone-icon" />
              <a
                className={classes.footer__contact_link}
                href="tel:8 800 866 86 86"
              >
                8 (800) 866-86-86
              </a>
            </div>
            <div className={classes.footer__contact_connect}>
              <img src="./marker-icon-yl.svg" alt="phone-icon" />
              <div className={classes.footer__contact_address}>
                Краснодар,
                <br />
                ул.Новороссийская, 25
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
