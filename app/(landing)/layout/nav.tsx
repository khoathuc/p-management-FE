"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [authenticated, setAuthenticated] = useState<Boolean>(false);

    return (
        <nav className="py-5 flex border-b border-b-border">
            <div className="container flex justify-between items-center">
                <Link href="/" className="hover:bg-secondary">
                    LOGO
                </Link>

                <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="hover:underline hover:bg-secondary p-2 rounded-sm">Home</Link>
                    </li>
                    <li>
                        <Link href="/products" className="hover:underline hover:bg-secondary p-2 rounded-sm">Product</Link>
                    </li>
                    <li>
                        <Link href="/about-us" className="hover:underline hover:bg-secondary p-2 rounded-sm">About</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline hover:bg-secondary p-2 rounded-sm">Contact</Link>
                    </li>
                </ul>

                <div>
                    {authenticated ? (
                        <div>Avatar</div>
                    ) : (
                        <div className="flex gap-3">
                            <Button variant="outline">Sign Up</Button>
                            <Button variant="default">Sign In</Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
