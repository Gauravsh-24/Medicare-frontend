"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
         <div className="max-w-prose md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
           Book Your Doctor Appointment Effortlessly
          </h2>

         <p className="mt-4 text-gray-700">
        Easily schedule appointments with trusted healthcare professionals. Browse available doctors,
         select a convenient time, and receive instant confirmation — all from the comfort of your home.
         </p>

      <p className="mt-2 text-gray-700">
        Manage your appointments, get reminders, and access your medical history securely through our
        platform.
      </p>

      <div className="mt-8">
        
       <Button>Get Started</Button>
      </div>
      </div>

      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?auto=format&fit=crop&q=80&w=1160"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero