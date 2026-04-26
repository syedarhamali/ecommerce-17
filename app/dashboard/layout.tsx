'use client'

import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) { // children == tamam dashboard k pages
    const [leftOpen, setLeftOpen] = useState(true);
    const [rightOpen, setRightOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100">

            {/* LEFT SIDEBAR */}
            <div className={`bg-gray-900 text-white w-64 p-5 space-y-6 transition-all duration-300
        ${leftOpen ? "block" : "hidden"} md:block`}>

                <h2 className="text-2xl font-bold">Dashboard</h2>

                <nav className="space-y-3">
                    <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Home</Link>
                    <Link href="/dashboard/profile" className="block p-2 rounded hover:bg-gray-700">Profile</Link>
                    <Link href="/dashboard/settings" className="block p-2 rounded hover:bg-gray-700">Settings</Link>
                </nav>
            </div>

            {/* MAIN SECTION */}
            <div className="flex-1 flex flex-col">

                {/* NAVBAR */}
                <header className="bg-white shadow p-4 flex justify-between items-center">

                    <div className="flex items-center gap-3">
                        {/* Toggle Left */}
                        <button
                            className="md:hidden"
                            onClick={() => setLeftOpen(!leftOpen)}
                        >
                            ☰
                        </button>

                        <h1 className="text-xl font-semibold">Dashboard</h1>
                    </div>

                    {/* Toggle Right */}
                    <button
                        className="text-gray-700"
                        onClick={() => setRightOpen(!rightOpen)}
                    >
                        ⚙️
                    </button>
                </header>

                {/* CONTENT AREA */}
                <div className="flex flex-1 overflow-hidden">

                    {/* MAIN CONTENT */}
                    <main className="flex-1 p-6 overflow-y-auto">
                        {children}
                    </main>

                    {/* RIGHT SIDEBAR */}
                    <div className={`bg-white w-72 border-l p-5 transition-all duration-300
            ${rightOpen ? "block" : "hidden"} md:block`}>

                        <h2 className="text-lg font-semibold mb-4">Notifications</h2>

                        <div className="space-y-3">
                            <div className="p-3 bg-gray-100 rounded">
                                New user registered
                            </div>
                            <div className="p-3 bg-gray-100 rounded">
                                Order #123 completed
                            </div>
                            <div className="p-3 bg-gray-100 rounded">
                                Server backup done
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}