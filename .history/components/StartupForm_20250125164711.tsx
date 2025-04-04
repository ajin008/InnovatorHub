"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const StartupForm = () => {
    const[errors,setErrors] = useState()
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
      </div>
    </form>
  );
};
export default StartupForm;
