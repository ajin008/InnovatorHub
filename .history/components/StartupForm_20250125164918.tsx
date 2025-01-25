"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const StartupForm = () => {
  const [errors, setErrors] = useState<Re>({});
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="startup title"
        />
        {error.title && <p className="startup-form_error">{errors.title}</p>}
      </div>
    </form>
  );
};
export default StartupForm;
