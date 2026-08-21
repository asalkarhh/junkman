import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-accent text-primary hover:bg-accent-hover focus-visible:outline-accent shadow-sm',
  secondary:
    'bg-primary text-white hover:bg-ink focus-visible:outline-primary',
  outline:
    'border border-primary/20 bg-white text-primary hover:border-primary hover:bg-surface',
  ghost: 'bg-transparent text-primary hover:bg-primary/5',
}

const sizes = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-5 text-sm sm:text-base',
  lg: 'min-h-12 px-6 text-base sm:min-h-[3.25rem]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
