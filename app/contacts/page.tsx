import {getContactsPages} from "@/lib/data";
import ContactTable from "../components/ContactTable";
import SearchInput from "../components/SearchInput";
import {Createbutton} from "../components/button";
import Pagination from "../components/Pagination";
import {TableSkeleton} from "../components/Skeleton";
import {Suspense} from "react";
const Contacts = async ({
  searchParams,
}: {
  searchParams?: {query?: string; page?: string};
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPage = await getContactsPages(query);

  return (
    <>
      <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
          <SearchInput />
          <Createbutton />
        </div>
        {/* membungkus contact table dengan react suspense library */}
        <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
          <ContactTable query={query} currentPage={currentPage} />
        </Suspense>
        <div className="flex justify-center mt-4">
          <Pagination totalPages={totalPage} />
        </div>
      </div>
    </>
  );
};

export default Contacts;

// npm i prisma @prisma/client npx prisma init
