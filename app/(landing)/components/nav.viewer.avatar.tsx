"use client";

import {
    DropdownMenuContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ViewerAvatar } from "@/components/uikit/user/viewer";

interface ViewAvatarProps {
    size?: "sm" | "md" | "lg";
}
export function NavViewerAvatar({ size }: ViewAvatarProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ViewerAvatar />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/settings/account" className="w-full">
                        Setting
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => signOut()}
                >
                    Signout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
