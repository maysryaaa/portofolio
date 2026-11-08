import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[10.5px] font-semibold uppercase leading-none tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-blush-wash shadow-[0_14px_30px_-14px_rgba(42,16,32,0.7)] hover:bg-ink-soft",
        secondary:
          "border border-white/65 bg-white/40 text-ink backdrop-blur-md hover:bg-white/60",
        outline:
          "border border-ink/35 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-blush-wash",
        ghost: "text-ink hover:bg-white/40",
        link: "rounded-none p-0 text-ink underline decoration-ink/35 underline-offset-4 hover:decoration-ink",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-[10px]",
        lg: "h-12 px-6",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
