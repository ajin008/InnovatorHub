import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

import { STARTUPS_QUERY } from "@/lib/queries";
import { sanityFetch, SanityLive } from "@/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

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
        
      </section>
      <SanityLive />
    </>
  );
}
