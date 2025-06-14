
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 btn-hover-effect [&_svg]:size-5 [&_svg]:shrink-0", // Refined base, slightly larger icon default
  {
    variants: {
      variant: {
        default: "brand-gradient-bg text-primary-foreground hover:opacity-95 shadow-soft", // Using brand gradient, refined hover, softer shadow
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground shadow-sm", // Softer shadow for outline
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-0 focus-visible:ring-offset-0", // No ring for link
        premium: "accent-gradient-bg text-premium-accent-foreground hover:opacity-95 shadow-md", // New premium variant
      },
      size: {
        default: "h-11 px-6 py-2.5 text-[15px]", // Consistent sizing
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
