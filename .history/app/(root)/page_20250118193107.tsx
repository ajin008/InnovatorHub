import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 44,
      author: { id: 1, name: "ajin" },
      _id: 1,
      description: "this is a description",
      image:
        "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594119_1280.jpg",
      category: "robots",
      title: "weCare",
    },
  ];
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
        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
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
