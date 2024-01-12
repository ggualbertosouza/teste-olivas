import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const dateVariants = cva("text-sm font-myriadRegular", {
  variants: {
    variant: {
      pink: "text-xlt_pink",
      white: "text-background",
      blue: "text-primary font-myriadSemi",
    },
  },
  defaultVariants: {
    variant: "pink",
  },
});

interface dateProps extends VariantProps<typeof dateVariants> {
  date: String;
}

export const PostDate = ({ date, variant }: dateProps) => {
  return <small className={cn(dateVariants({ variant }))}>{date}</small>;
};
