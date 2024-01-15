import { ReactNode } from "react";

interface IRoot {
  children: ReactNode;
}

export const titleRoot = ({ children }: IRoot) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {children}
    </div>
  );
};
