import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default async function Home({
  searchparams,
}: {
  searchparams: Promise<{ query?: string }>;
}) {
  const query = (await searchparams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Bring Your Startup Ideas to
          <br />
          Life{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Pitch your startup idea, connect with like-minded innovators, and gain
          the visibility you need to ignite your entrepreneurial journey
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
