import React from "react";
import Navbar from "./components/Navbar";
import AppRouters from "./routes/AppRouters";

const App = () => {
  return (
    <div className="min-h-screen flex gap-6 flex-col text-white text-xl w-full bg-black p-5">
      <Navbar />
      <div className="h-full w-full">
        <AppRouters />
      </div>
    </div>
  );
};

export default App;
