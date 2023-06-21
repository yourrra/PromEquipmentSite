import { forwardRef, memo } from 'react'
import classes from './Line.module.css'

export const Line = memo(
  forwardRef(() => {
    return <div className={classes.line}></div>
  }),
)
