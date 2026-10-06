import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'navy' | 'outline' | 'outlineLight' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  to?: string
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-orange text-white hover:bg-orange-hover shadow-[0_6px_16px_rgba(241,90,36,0.28)]',
  navy: 'bg-navy text-white hover:bg-navy-mid',
  outline: 'border border-navy text-navy bg-white hover:bg-surface',
  outlineLight: 'border border-white/80 text-white bg-transparent hover:bg-white/10',
  ghost: 'text-navy hover:bg-surface',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-xs',
  md: 'h-11 px-5 text-[13px]',
  lg: 'h-12 px-6 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  to,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-wide uppercase transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={props.onClick as never}>
        {children}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        onClick={props.onClick as never}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
