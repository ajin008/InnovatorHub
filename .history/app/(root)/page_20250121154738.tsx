import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/queries";
import { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

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

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results for "${query}"` : "all Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?.id} post={post} />
            ))
          ) : (
            <p className="no-result">no startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
