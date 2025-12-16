"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    specialization: "Cardiologist",
    experience: "10+ years",
    image: "/doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. Neha Verma",
    specialization: "Dermatologist",
    experience: "8 years",
    image: "/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Rahul Mehta",
    specialization: "Orthopedic",
    experience: "12 years",
    image: "/doctor3.jpg",
  },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Find a Doctor
          </h1>
          <p className="mt-2 text-gray-600">
            Choose from our list of trusted healthcare professionals
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Doctor Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {doctor.specialization}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Experience: {doctor.experience}
                </p>

                {/* Action */}
                <Link href={`/Book Appointment?doctorId=${doctor.id}`}>
                  <Button className="mt-4 w-full">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
