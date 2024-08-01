'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex flex-col justify-center items-center">
      <h1 className="mt-24 pt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 flex ">Contact Us</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey</p>
      </div>
      <form className="flex flex-col">
        <input
        type="email"
        className="py-4 w-[550px] mt-8 p-2 bg-gray-600 text-white outline-none rounded-lg"
        placeholder="Enter email address">

        </input>
        <textarea
        className="py-4 w-[550px] h-[250px] mt-8 p-2 bg-gray-600 text-white outline-none rounded-lg"
        placeholder="Your Message">
        </textarea>
      </form>
      <Meteors className="w-full overflow-hidden h-auto max-w-80 max-h-[400px]" number={20} />
    </div>
  )
}

export default page
