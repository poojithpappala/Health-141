
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-hover-effect [&_svg]:size-4.5 [&_svg]:shrink-0", // Adjusted base, added btn-hover-effect, slightly larger icon
  {
    variants: {
      variant: {
        default: "brand-gradient-bg text-primary-foreground hover:opacity-90 soft-shadow", // Using brand gradient
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 soft-shadow",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground soft-shadow", // Transparent bg, uses accent for hover
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 soft-shadow",
        ghost: "hover:bg-accent hover:text-accent-foreground", // Accent for hover
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5", // Slightly larger default size for premium feel
        sm: "h-10 rounded-md px-4",   // Adjusted sm
        lg: "h-12 rounded-lg px-8 text-base", // Adjusted lg
        icon: "h-11 w-11", // Adjusted icon size
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

