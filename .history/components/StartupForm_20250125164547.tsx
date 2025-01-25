"use client";
import React from "react";
import { Input } from "./ui/input";

const StartupForm = () => {
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input id="title" name="title" className="startup" />
      </div>
    </form>
  );
};
export default StartupForm;
