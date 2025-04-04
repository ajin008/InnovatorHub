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

        {/* Description Field */}
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Input
          id="description"
          name="description"
          className="startup-form_input"
          required
          placeholder="startup description"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}

        {/* Category Field  */}
        <label htmlFor="category" className="startup-form_label">
          category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="startup category"
        />
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
        {/* image */}
         <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.li
      </div>
    </form>
  );
};

export default StartupForm;
