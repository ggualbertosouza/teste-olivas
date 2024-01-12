import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const titleVariants = cva("", {
  variants: {
    variant: {
      blue: "text-primary",
      white: "text-background",
    },
    size: {
      md: "text-2xl",
      lg: "text-3xl",
      xl: "text-4xl",
    },
  },
  defaultVariants: {
    variant: "blue",
    size: "md",
  },
});

interface titleProps extends VariantProps<typeof titleVariants> {
  title: string;
}

export const PostTitle = ({ variant, size, title }: titleProps) => {
  return <h3 className={cn(titleVariants({ size, variant }))}>{title}</h3>;
};
