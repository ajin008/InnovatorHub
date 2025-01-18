"use client";
import React from "react";

export const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return <button type="reset" onClick={reset}>
    <Link href=""></Link>
  </button>;
};
