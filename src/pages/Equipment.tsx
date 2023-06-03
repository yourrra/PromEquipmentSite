import classes from './equipment.module.css'

export function Equipment() {
  return (
    <div className="wrapper">
      <div className={classes.equipment__wrapper}>
        <h1>Оборудование</h1>
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
