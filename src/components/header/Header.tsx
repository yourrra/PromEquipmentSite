import classes from './header.module.css'
import { Link } from 'react-router-dom'
import * as URLS from '../../constants/urls'
// import logo from '../../assets/Logo.jpg'

export function Header() {
  return (
    <div className="wrapper__shadows">
      <div className="wrapper">
        <header className={classes.header}>
          <div className={classes.header__logo}>
            <img
              className={classes.header__logo_img}
              src="./Logo.svg"
              alt="logo"
            />
          </div>
          <nav className={classes.header__nav}>
            <ul className={classes.header__nav_wrapper}>
              <li>
                <Link className={classes.header__nav_link} to={URLS.MAIN}>
                  Главная
                </Link>
              </li>
              <li>
                <Link className={classes.header__nav_link} to={URLS.ABOUT}>
                  О Компании
                </Link>
              </li>
              <li>
                <Link className={classes.header__nav_link} to={URLS.SERVICES}>
                  Услуги
                </Link>
              </li>
              <li>
                <Link className={classes.header__nav_link} to={URLS.EQUIPMENT}>
                  Оборудование
                </Link>
              </li>
              <li>
                <Link className={classes.header__nav_link} to={URLS.OBJECTS}>
                  Объекты
                </Link>
              </li>
              <li>
                <Link className={classes.header__nav_link} to={URLS.CONTACTS}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <div className={classes.header__contact}>
            <div className={classes.header__contact_connect}>
              <img height={20} src="./mail-icon.svg" alt="mail-icon" />
              <a
                className={classes.header__contact_link}
                href="mailto:example@gmail.com"
              >
                example@gmail.com
              </a>
            </div>
            <div className={classes.header__contact_connect}>
              <img height={20} src="./phone-icon.svg" alt="phone-icon" />
              <a
                className={classes.header__contact_link}
                href="tel:8 800 866 86 86"
              >
                8 (800) 866-86-86
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
