import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const barVariant = cva("w-[7rem] h-2 rounded-full", {
  variants: {
    variant: {
      white: "bg-background self-start",
      blue: "bg-blue",
    },
  },
});

interface barProps extends VariantProps<typeof barVariant> {}

export const titleBar = ({ variant }: barProps) => {
  return <div className={cn(barVariant({ variant }))} />;
};
