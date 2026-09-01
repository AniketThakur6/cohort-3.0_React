import { Search, X, ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";

const SearchFilters = () => {
  const { filterValue, setFilterValue } = useContext(MyContext);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFilterValue({ ...filterValue, [name]: value });
  };

  const clear = (key) => {
    console.log(key);
    setFilterValue({ ...filterValue, [key]: "" });
  };

  const clearAll = () => {
    setFilterValue({
      search: "",
      category: "",
      featured: "",
    });
  };

  return (
    <div className="w-full rounded-2xl border border-gray-500 bg-[#111111] p-4">
      {/* Top Controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {/* Search */}
        <div className="flex h-11 flex-1 items-center rounded-xl border focus-within:outline-none focus-within:border-main-color border-zinc-700 bg-[#252525] px-3 py-2 focus-within:shadow-[0_0_5px_#C8F400]">
          <Search size={18} className="text-gray-500" />

          <input
            onChange={handleChange}
            name="search"
            value={filterValue.search}
            type="text"
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />

          {filterValue.search ? (
            <X
              size={16}
              onClick={() => clear("search")}
              className="cursor-pointer text-gray-500"
            />
          ) : (
            ""
          )}
        </div>

        {/* Category */}
        <div className="relative flex w-full items-center rounded-xl border border-zinc-700 bg-[#202020] px-4 py-2.5 text-sm text-gray-200 outline-none focus-within:border-main-color sm:w-48">
          <select
            onChange={handleChange}
            name="category"
            value={filterValue.category}
            className="w-full appearance-none bg-[#202020] pl-2 text-white outline-none"
          >
            <option
              value=""
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              All Categories
            </option>

            <option
              value="electronics"
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              Electronics
            </option>

            <option
              value="clothing"
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              Clothing
            </option>

            <option
              value="furniture"
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              Furniture
            </option>

            <option
              value="home"
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              Home
            </option>

            <option
              value="sports"
              className="bg-[#202020] text-white checked:bg-main-color checked:text-black"
            >
              Sports
            </option>

            <option
              value="accessories"
              className="bg-[#202020] aligin-center text-white checked:bg-main-color checked:text-black"
            >
              Accessories
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 text-gray-100"
          />
        </div>

        {/* Featured */}
        <div className="relative flex w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#202020] px-4 py-2.5 focus-within:border-main-color sm:w-48">
          <select
            onChange={handleChange}
            name="featured"
            value={filterValue.featured}
            className="w-full appearance-none bg-[#202020] pl-2 text-white outline-none"
          >
            <option
              className="checked:bg-main-color checked:text-black"
              value=""
            >
              Featured
            </option>
            <option
              className="checked:bg-main-color checked:text-black"
              value="Price: Low → High"
            >
              Price: Low → High
            </option>
            <option
              className="checked:bg-main-color checked:text-black"
              value="Price: High → Low"
            >
              Price: High → Low
            </option>
            <option
              className="checked:bg-main-color checked:text-black"
              value="Top Rated"
            >
              Top Rated
            </option>
            <option
              className="checked:bg-main-color checked:text-black"
              value="Lowest Rated"
            >
              Lowest Rated
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 text-gray-400"
          />
        </div>

        {/* Clear */}
        {filterValue.search || filterValue.category || filterValue.featured ? (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 rounded-xl border border-red-900/50 bg-red-950/30 px-5 py-2.5 text-sm text-red-400"
          >
            <X size={16} />
            Clear
          </button>
        ) : (
          ""
        )}
      </div>

      {/* Divider */}

      {/* Search Tag */}
      {filterValue.search || filterValue.category || filterValue.featured ? (
        <div className="flex w-full flex-col">
          <div className="my-3 border-t border-gray-500" />
          <div className="flex flex-wrap gap-2">
            {Object.entries(filterValue).map(([key, value]) =>
              value ? (
                <span key={key} className="inline-flex items-center gap-1 rounded-full bg-[#2b3500] px-2 py-1 text-xs text-main-color">
                  {value}
                  <X key={key} onClick={() => clear(key)} size={12} />
                </span>
              ) : (
                ""
              ),
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchFilters;
