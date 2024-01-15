import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const titleVariants = cva("font-myriadBold text-center", {
  variants: {
    variant: {
      white: "text-background self-start",
      blue: "text-primary",
    },
    size: {
      lg: "text-4xl",
      xl: "text-5xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface titleProps extends VariantProps<typeof titleVariants> {
  text: string;
  coloredText?: string;
}

export const titleText = ({ variant, text, coloredText, size }: titleProps) => {
  return (
    <h2 className={cn(titleVariants({ variant, size }))}>
      {text}
      <span className="text-blue">{coloredText}</span>
    </h2>
  );
};
