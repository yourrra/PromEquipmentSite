import classes from './contacts.module.css'

export function Contacts() {
  return (
    <div className="wrapper">
      <div className={classes.contacts__wrapper}>
        <h1>Контакты</h1>
        <p>
          Компания «Агро-инжиниринг ЮГ» предлагает комплексные решения в сфере
          хранения и переработки зерна. Современные технологии и многолетний
          опыт специалистов компании позволяют создавать эффективные и
          качественные продукты точно отвечающие потребностям наших клиентов.
        </p>
      </div>
    </div>
  )
}
