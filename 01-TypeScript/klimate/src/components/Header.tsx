import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";
import CitySearch from "./CitySearch";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-background/95 supports-backdrop-filter:bg-background/50 py-2">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4">
        <Link to="/">
          <img src="/klimate.png" alt="klimate logo" className="h-14" />
        </Link>
        <div className="flex gap-4">

          {/* search */}
          <CitySearch />

          <div onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark? "rotate-180":"rotate-0"}`}
            >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 text-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
