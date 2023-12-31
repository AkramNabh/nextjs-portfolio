"use client";
import Deliver from "@/ActivateSend";
import { DarkTheme, LightTheme } from "@/utils/ThemeInfo";
import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

const Contact = (props: Props) => {
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLTextAreaElement
      ) {
        formData[field.name] = field.value;
      }
    });
    try {
      const response = await fetch("/api/hello", {
        method: "post",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        toast.error("Something went wrong!");
        return;
      }

      const result = await response.json();

      if (result.error) {
        toast.error("Something went wrong!");
      } else {
        toast.success("Message Sent, I'll catch up with you soon!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <section className="h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24 w-full">
      <h1
        className={`text-2xl uppercase tracking-[20px] text-[#007CBE] dark:text-[#C84B31]`}
      >
        contact me
      </h1>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-3 w-full md:w-[30%] "
      >
        <input
          className={`placeholder-[#1E1B18] dark:placeholder-[#EEEEEE] border-2 border-[#ff801185] dark:border-[#ff801185] focus:outline-none p-2 bg-transparent rounded-lg w-full`}
          placeholder="Your name"
          type="text"
          name="name"
        />
        <input
          className={`placeholder-[#1E1B18] dark:placeholder-[#EEEEEE] border-2 border-[#ff801185] dark:border-[#ff801185] focus:outline-none p-2 bg-transparent rounded-lg w-full`}
          placeholder="Subject"
          type="text"
          name="subject"
        />
        <input
          className={`placeholder-[#1E1B18] dark:placeholder-[#EEEEEE] border-2 border-[#ff801185] dark:border-[#ff801185] focus:outline-none p-2 bg-transparent rounded-lg w-full`}
          placeholder="email"
          type="email"
          name="email"
          required
        />

        <textarea
          rows={8}
          className={`placeholder-[#1E1B18] dark:placeholder-[#EEEEEE] border-2 border-[#ff801185] dark:border-[#ff801185] focus:outline-none p-2 bg-transparent rounded-lg w-full`}
          placeholder="Your message"
          required
          name="message"
        />
        <button
          type="submit"
          className={`bg-gradient-to-r from-[#252422] to-[#007CBE] dark:from-[#D65A31] dark:to-[#252422] p-3 rounded-lg font-bold w-full ${LightTheme.contactBtext} ${DarkTheme.contactBtext} hover:opacity-90`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
