"use client";
import Link from "next/link";
import {IoAddSharp, IoPencil, IoTrash} from "react-icons/io5";
import {useFormStatus} from "react-dom";
import clsx from "clsx";
import {deleteContact} from "@/lib/action";

export const Createbutton = () => {
  return (
    <>
      <div>
        <Link
          href={"/contacts/create"}
          className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
          <IoAddSharp size={20} />
          Create
        </Link>
      </div>
    </>
  );
};

export const Editbutton = ({id}: {id: string}) => {
  return (
    <>
      <Link
        href={`/contacts/edit/${id}`}
        className="rounded-sm border p-1 hover:bg-gray-100">
        <IoPencil size={20} />
      </Link>
    </>
  );
};

export const Deletebutton = ({id}: {id: string}) => {
  const DeleteContactWithId = deleteContact.bind(null, id);
  return (
    <>
      <div>
        <form action={DeleteContactWithId}>
          <button className="rounded-sm border p-1 hover:bg-gray-100">
            <IoTrash size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export const SubmitButton = ({label}: {label: string}) => {
  const {pending} = useFormStatus();

  // clsx mempunyai 2 parameter yg pertama style dfault yg ke2 kondisi tertentu
  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <>
      <button type="submit" className={className} disabled={pending}>
        {label === "save" ? (
          <span>{pending ? "saving..." : "Save"}</span>
        ) : (
          <span>{pending ? "updating..." : "update"}</span>
        )}
      </button>
    </>
  );
};
