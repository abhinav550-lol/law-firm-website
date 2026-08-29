import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const Button = ({
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`font-inter inline-flex items-center justify-center rounded-md bg-button px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-button-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
