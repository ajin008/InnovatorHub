import React from "react";

export const SearchFormReset = () => {
    const reset = () =>{
        const form = document.querySelector(selectors:'.search-form') as HTMLFormElement;
        
        if(form) form.reset();
      }
  return <button type="reset" onClick={reset}></button>;
};
