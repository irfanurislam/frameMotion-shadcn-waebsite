import { ReactNode } from "react";

type childrenProps = {
  children: ReactNode;
};

const Container = ({ children }: childrenProps) => {
  return (
    <div className="w-full px-[20px] max-w-[1200px] mx-auto bg-cyan-300">
      {children}
    </div>
  );
};

export default Container;
