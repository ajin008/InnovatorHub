"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

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
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      {/* category */}
      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />

        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      {/* img */}
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

        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>
      {/* pitch */}
      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
    </form>
  );
};

export default StartupForm;
