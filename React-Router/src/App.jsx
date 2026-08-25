import React from "react";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRouters";

const App = () => {
  return (
    <div className="flex flex-col text-xl gap-6 h-screen w-full p-8 bg-black">
      <Navbar />
      <AppRouters />
    </div>
  );
};

export default App;
