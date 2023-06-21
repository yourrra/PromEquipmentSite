import cn from 'classnames'
import classes from './Button.module.css'
import {
  type PropsWithChildren,
  type ButtonHTMLAttributes,
  memo,
  forwardRef,
} from 'react'

type Props = PropsWithChildren<
  {
    variant?: 'red' | 'green'
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export const Button = memo(
  forwardRef<HTMLButtonElement, Props>(
    (
      { variant = 'green', children, className = '', ...htmlButtonProps },
      ref,
    ) => {
      return (
        <button
          className={cn(
            classes.Button,
            {
              [classes.isGreen]: variant === 'green',
              [classes.isRed]: variant === 'red',
            },
            className,
          )}
          ref={ref}
          {...htmlButtonProps}
        >
          {children}
        </button>
      )
    },
  ),
)
