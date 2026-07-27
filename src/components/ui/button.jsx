import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = {
  default:
    "bg-foreground text-background shadow-sm hover:bg-foreground/90",
  secondary:
    "bg-card text-foreground border border-border/60 hover:bg-card/80",
  outline:
    "border border-border/60 bg-transparent text-foreground hover:bg-card",
  ghost:
    "bg-transparent text-foreground hover:bg-card",
}

const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", asChild = false, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && buttonVariants.default,
    variant === "secondary" && buttonVariants.secondary,
    variant === "outline" && buttonVariants.outline,
    variant === "ghost" && buttonVariants.ghost,
    size === "default" && "h-10 px-4 py-2",
    size === "sm" && "h-9 rounded-full px-3",
    size === "icon" && "h-10 w-10",
    className
  )

  if (asChild && React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      ref,
      className: cn(classes, props.children.props.className),
    })
  }

  return <button ref={ref} className={classes} {...props} />
})

export { Button }
