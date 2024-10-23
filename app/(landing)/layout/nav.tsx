"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import app from '@/lib/app';

export default function Nav() {
    const [authenticated, setAuthenticated] = useState<Boolean>(false);

    return (
        <nav className="py-5">
            <div className="container flex justify-between items-center">
                <Link href="/" className="hover:bg-secondary">
                    <Image src={app.logoUrl} alt="app_logo" width={44} height={44}/>
                </Link>

                <ul className="flex gap-6">
                    <li>
                        <Link
                            href="/"
                            className="hover:underline hover:bg-secondary p-2 rounded-sm"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/products"
                            className="hover:underline hover:bg-secondary p-2 rounded-sm"
                        >
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className="hover:underline hover:bg-secondary p-2 rounded-sm"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:underline hover:bg-secondary p-2 rounded-sm"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div>
                    {authenticated ? (
                        <div>Avatar</div>
                    ) : (
                        <div className="flex gap-3">
                            <Button variant="outline" asChild>
                                <Link href="/auth/sign-up">Sign Up</Link>
                            </Button>
                            <Button variant="default" asChild>
                                <Link href="/auth/sign-in">Sign In</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
