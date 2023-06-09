import { Line } from '../components/line/Line'
import classes from './contacts.module.css'

export function Contacts() {
  return (
    <div className="wrapper">
      <div className={classes.contacts__wrapper}>
        <h1 className={classes.contacts__title}>Контакты</h1>
        <Line />
        <div className={classes.contacts__contactblock}>
          <h2 className={classes.contacts__topic}>Рабочие телефоны</h2>
          <div className={classes.contacts__cardblock}>
            <div className={classes.contacts__card}>
              <h3 className={classes.contacts__card_title}>Отдел продаж</h3>
              <div className={classes.contacts__card_phone}>
                <p className={classes.contacts__card_topic}>Телефон:</p>
                <a
                  className={classes.contacts__card_link}
                  href="tel:8 800 866 86 86"
                >
                  8 800 866 86 86
                </a>
              </div>
              <div>
                <p className={classes.contacts__card_topic}>Почта:</p>
                <a
                  className={classes.contacts__card_link}
                  href="mailto:example@gmail.com"
                >
                  example@gmail.co
                </a>
              </div>
            </div>
            <div className={classes.contacts__card}>
              <h3 className={classes.contacts__card_title}>Приемная</h3>
              <div>
                <p className={classes.contacts__card_topic}>Почта:</p>
                <a
                  className={classes.contacts__card_link}
                  href="mailto:example@gmail.com"
                >
                  example@gmail.co
                </a>
              </div>
            </div>
            <div className={classes.contacts__card}>
              <h3 className={classes.contacts__card_title}>Отдел снабжения</h3>
              <div className={classes.contacts__card_phone}>
                <p className={classes.contacts__card_topic}>Телефон:</p>
                <a
                  className={classes.contacts__card_link}
                  href="tel:8 800 866 86 86"
                >
                  8 800 866 86 86
                </a>
              </div>
              <div>
                <p className={classes.contacts__card_topic}>Почта:</p>
                <a
                  className={classes.contacts__card_link}
                  href="mailto:example@gmail.com"
                >
                  example@gmail.co
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className={classes.contacts__topic}>Наш адрес</h2>
        <h2 className={classes.contacts__topic}>Остались вопросы?</h2>
      </div>
    </div>
  )
}
