import React from "react";
import Form from "next/form";

const SearchForm = () => {
  const query = "Test";
  c
  return (
    <div>
      <Form action="/" scroll={false} className="search-form">
        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="search startups"
        />
        <div className="flex gap-2">
          {query && <button type="reset" onClick={reset}></button>}
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
