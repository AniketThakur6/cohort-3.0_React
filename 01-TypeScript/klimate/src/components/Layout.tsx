import { type PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-linear-to-br from-background to-muted">
      <Header />
      <main className="mx-auto min-h-screen w-full max-w-7xl py-8">
      {children}
      </main>
      <footer className="broder-t backdrop-blur py-12 supports-backdrop-filter:bg-background/50 ">
        <div className="mx-auto w-full max-w-7xl px-4 text-center text-gray-400">
          <p>Aniket</p>
        </div>
      </footer>
      </div>
  );
};

export default Layout;
