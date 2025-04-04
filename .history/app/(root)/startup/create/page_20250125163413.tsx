import { StartupForm } from "@/components/StartupForm";

// import StartupForm from "@/components/StartupForm";
const page = async() => {
    const session = await auth()
    if(!session)
  return (
    <>
      <section className="pink_container !min-h-[230]">
        <h1 className="heading">submit your startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default page;
