import { PropsWithChildren } from "react";
import NavBar from './NavBar';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-6/12 flex-col justify-center px-8">
          <NavBar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Container;
