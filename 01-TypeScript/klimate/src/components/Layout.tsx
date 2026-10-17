import { type PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-linear-to-br from-background to-muted">
      <Header />
      <main className="mx-auto min-h-screen w-full max-w-7xl py-8">{children}</main>
      <footer className="broder-t backdrop-blur py-4 supports-backdrop-filter:bg-background/50 ">
        <div className="mx-auto w-full max-w-7xl px-4 text-center text-gray-400">
          <p className="text-muted-foreground">
            © 2026 Klimate · More info on
            <a
              href="https://github.com/AniketThakur6/cohort-3.0_React/tree/main/01-TypeScript/klimate"
              target="_blank"
              className="text-zinc-200 ml-1 cursor-pointer hover:underline transition-all hover:text-amber-400"
            >
              here.
            </a>
          </p>

          <a
            href="https://github.com/AniketThakur6"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-zinc-500"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              aria-hidden="true"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
            >
              <path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" />
            </svg>
            Aniket Thakur
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
