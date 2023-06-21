import cn from 'classnames'
import classes from './Input.module.css'
import {
  type InputHTMLAttributes,
  type PropsWithChildren,
  memo,
  forwardRef,
} from 'react'

type Props = PropsWithChildren<
  {
    placeholder: string
  } & InputHTMLAttributes<HTMLInputElement>
>

export const Input = memo(
  forwardRef<HTMLInputElement, Props>(
    ({ placeholder, className = '', ...htmlInputProps }, ref) => {
      return (
        <form>
          <input
            type="text"
            placeholder={placeholder}
            className={cn(classes.Input, {}, className)}
            ref={ref}
            {...htmlInputProps}
          />
        </form>
      )
    },
  ),
)
