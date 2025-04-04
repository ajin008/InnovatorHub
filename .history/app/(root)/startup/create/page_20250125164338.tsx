
import { redirect } from "next/navigation";
import { auth } from "@/auth";

// import StartupForm from "@/components/StartupForm";
const page = async () => {
  const session = await auth();
  if (!session) redirect("/");
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
