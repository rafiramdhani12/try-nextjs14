import EditForm from "@/app/components/EditForm";
import {getContactsById} from "@/lib/data";
import {notFound} from "next/navigation";

const editPage = async ({params}: {params: {id: string}}) => {
  const id = params.id;
  const contact = await getContactsById(id);
  if (!contact) {
    notFound();
  }
  return (
    <>
      <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">add new Contact</h1>
        <EditForm contact={contact} />
      </div>
    </>
  );
};

export default editPage;
