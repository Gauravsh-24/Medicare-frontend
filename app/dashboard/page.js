"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome 👋
            </h1>
            <p className="mt-1 text-gray-600">
              Find doctors and book appointments easily
            </p>
          </div>

          <Link href="/doctors">
            <Button className="mt-4 sm:mt-0">
              Find a Doctor
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-500">Upcoming Appointments</p>
            <p className="mt-2 text-2xl font-bold text-indigo-600">2</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-500">Completed Visits</p>
            <p className="mt-2 text-2xl font-bold text-green-600">5</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm text-gray-500">Saved Doctors</p>
            <p className="mt-2 text-2xl font-bold text-blue-600">3</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Book an Appointment
            </h3>
            <p className="mt-2 text-gray-600">
              Choose a doctor and select a flexible date & time.
            </p>
            <Link href="/doctors">
              <Button className="mt-4">
                Book Now
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              My Appointments
            </h3>
            <p className="mt-2 text-gray-600">
              View or manage your upcoming appointments.
            </p>
            <Link href="/appointments">
              <Button variant="outline" className="mt-4">
                View Appointments
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
