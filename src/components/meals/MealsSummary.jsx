import React from 'react'

import classes from './MealsSummary.module.css'

function MealsSummary() {
  return (
    <section className={classes.summary}>
        <h2> Food delivered to you</h2>
        <p>
            Choose your favourite meal from our selection of available options
            and enjoy without cooking.
        </p>
        <p>
            our meals are v high quality!
        </p>
    </section>
  )
}

export default MealsSummary