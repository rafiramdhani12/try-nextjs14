"use client";
import {IoSearch} from "react-icons/io5";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

// mengambil value dan set value dan memanipulasi url nya menggunakan useSearchparams , usePathName useRouter
const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    //  set(term) dan delete query
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
    // cara diatas sebenarnya bisa saja  cara diatas selalu mengirimkan request ke server jika user mengetik maka dari itu dibutuhkan useDebounce
  }, 300);

  return (
    <>
      <div className="relative flex flex-1">
        <input
          type="text"
          name=""
          id=""
          className="w-full border-gray-200 border py-2 pl-10 text-sm outline-2 rounded-sm"
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray500" />
      </div>
    </>
  );
};

export default SearchInput;
