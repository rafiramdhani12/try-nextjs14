import CreateForm from "@/app/components/CreateForm";

const CreateContactPage = () => {
  return (
    <>
      <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">add new Contact</h1>
        <CreateForm />
      </div>
    </>
  );
};

export default CreateContactPage;
