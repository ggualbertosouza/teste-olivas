export const PostRoot = ({ children }: { children: React.ReactNode }) => {
  return <article className="flex flex-col gap-2 hover:bg-black/5 p-2 rounded-md">{children}</article>;
};
