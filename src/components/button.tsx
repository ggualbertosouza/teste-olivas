import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-3 py-1 flex items-center gap-2 rounded-full font-myriadRegular w-fit",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-green_dark to-green_light text-background",
        secondary: "bg-transparent border border-lt_pink text-lt_pink px-12 hover:bg-xlt_pink hover:text-white",
        white: "bg-transparent border border-white text-white px-12 hover:bg-white/40 hover:text-primary/40",
        pink: "bg-gradient-to-r from-lt_pink to-xlt_pink text-white px-6"
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ className, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);
