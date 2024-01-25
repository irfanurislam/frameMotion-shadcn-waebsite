import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TcontainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TcontainerProps) => {
  return (
    <div className={cn("w-full px-[20px] max-w-[1230px] mx-auto ", className)}>
      {children}
    </div>
  );
};

export default Container;
