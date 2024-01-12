import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const contentVariant = cva(
  'text-sm overflow-hidden text-grey_light',
  {
    variants: {
      variant: {
        default: " italic text-ellipsis h-24 line-clamp-5 leading-6",
        description: "myriadRegular "
      }
    }
  }
)

interface contentProps extends VariantProps<typeof contentVariant>{
  text: string;
}

export const PostContent = ({ text, variant }: contentProps) => {
  return (
    <div
      className={cn(contentVariant({variant}))}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};
