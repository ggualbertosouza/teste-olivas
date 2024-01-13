import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const slugVariant = cva(
  "px-3 py-0.5 flex items-center justify-center text-background w-fit rounded-full",
  {
    variants: {
      variant: {
        pink: "bg-gradient-to-r from-lt_pink to-xlt_pink",
        blue: "bg-gradient-to-r from-lt_blue to-xlt_blue",
      },
    },
    defaultVariants: {
      variant: "pink",
    },
  },
);

interface slugProps extends VariantProps<typeof slugVariant> {
  slug: string;
}

export const PostSlug = ({ variant, slug }: slugProps) => {
  return <div className={cn(slugVariant({ variant }))}>{slug}</div>;
};
