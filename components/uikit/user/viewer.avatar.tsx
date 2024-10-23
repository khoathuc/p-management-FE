"use client";

import { useViewer } from "@/hooks/user/use.viewer";
import { AvatarSkeleton, UserAvatar } from "./avatar";
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

interface ViewAvatarProps {
    size?: "sm" | "md" | "lg";
}
export default function ViewerAvatar({ size }: ViewAvatarProps) {
    const { data: viewer, isLoading, isError } = useViewer();

    if (!viewer) {
        return <AvatarSkeleton size={size || "md"} />;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    user={viewer}
                    size={size || "md"}
                    className="hover:cursor-pointer"
                />
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
