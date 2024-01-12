import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const titleVariants = cva("text-4xl font-myriadBold", {
  variants: {
    variant: {
      white: "text-background self-start",
      blue: "text-primary",
    },
  },
});

interface titleProps extends VariantProps<typeof titleVariants> {
  text: string;
  coloredText?: string;
}

export const titleText = ({ variant, text, coloredText }: titleProps) => {
  return (
    <h2 className={cn(titleVariants({ variant }))}>
      {text}
      <span className="text-blue">{coloredText}</span>
    </h2>
  );
};
