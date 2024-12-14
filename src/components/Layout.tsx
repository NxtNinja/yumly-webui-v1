import { Roboto } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={roboto.className}>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
