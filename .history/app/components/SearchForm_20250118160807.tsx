import React from "react";
import Form from "next/form";

const SearchForm = () => {
  return (
    <div>
      <Form action="/" scroll={false} className="search-form">
        <input
          name="query"
          defaultValue=""
          className="search-input"
          placeholder="search startups"
        />
        <div className="flex gap"></div>
      </Form>
    </div>
  );
};

export default SearchForm;
