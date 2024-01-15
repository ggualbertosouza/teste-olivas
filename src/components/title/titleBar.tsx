import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const barVariant = cva("h-2 rounded-full", {
  variants: {
    variant: {
      white: "bg-background self-start",
      blue: "bg-blue",
    },
    size: {
      sm: "w-[3rem]",
      md: "w-[7rem] h-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface barProps extends VariantProps<typeof barVariant> {}

export const titleBar = ({ variant, size }: barProps) => {
  return <div className={cn(barVariant({ variant, size }))} />;
};
