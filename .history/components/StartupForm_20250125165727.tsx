"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form action={() => {}} className="startup-form">
      <div>
        {/* Title Field */}
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
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>

      {/* description */}
    </form>
  );
};

export default StartupForm;
