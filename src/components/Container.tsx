import { PropsWithChildren } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-800">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-6/12 flex-col justify-center px-8">
          <NavBar />
          <main>{children}</main>
          <hr className="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Container;
