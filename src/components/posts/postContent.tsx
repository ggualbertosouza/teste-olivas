import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const contentVariant = cva("text-sm overflow-hidden text-grey_light", {
  variants: {
    variant: {
      default: "text-ellipsis  line-clamp-5 leading-6 font-myriadRegular",
      description: "font-myriadRegular",
    },
  },
});

interface contentProps extends VariantProps<typeof contentVariant> {
  text: string;
}

export const PostContent = ({ text, variant }: contentProps) => {
  return (
    <div
      className={cn(contentVariant({ variant }))}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
