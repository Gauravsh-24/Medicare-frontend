"use client";

import React from 'react'
import Image from 'next/image';
import path from 'path';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: '/'
        },
        {
            id: 3,
            name: "contact us",
            path: '/'

        }
    ]
    return (
        <div className="flex items-center justify-between p-3 shadow-sm">
            {/* Left side: Logo + Menu */}
            <div className="flex items-center gap-10">
                <Image src="/logo.svg" alt="Logo" width={120} height={40} />

                <ul className="hidden md:flex gap-8">
                    {Menu.map((item, index) => (
                        <li
                            key={index}
                            className="hover:text-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out"
                        >
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side: Auth buttons */}
            <div className="flex items-center gap-3">
                <Link href="/register">
                <Button>Register</Button>
                </Link>
                
                <Link href="/login">
                <Button variant="outline">Login</Button>
                </Link>

            </div>
        </div>

    )
}

export default Header