import React from "react";

const PageFooter = () => {
  return (
    <div className="w-full border-t border-[#333] bg-[#0b0b0b] px-4 py-8 text-center">
      <h2 className="text-2xl font-semibold text-main-color">SkyMart</h2>

      <p className="mt-2 text-[16px] text-gray-600">
        © 2025 SkyMart • Built with React + Redux + TanStack Query
      </p>
    </div>
  );
};

export default PageFooter;
