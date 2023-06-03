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
          <div className={classes.footer__contact}>
            <div className={classes.footer__contact_connect}>
              <img height={20} src="./mail-icon.svg" alt="mail-icon" />
              <a
                className={classes.footer__contact_link}
                href="mailto:example@gmail.com"
              >
                example@gmail.com
              </a>
            </div>
            <div className={classes.footer__contact_connect}>
              <img height={20} src="./phone-icon.svg" alt="phone-icon" />
              <a
                className={classes.footer__contact_link}
                href="tel:8 800 866 86 86"
              >
                8 (800) 866-86-86
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
