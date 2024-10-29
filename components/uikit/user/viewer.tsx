"use client";

import { useViewer } from "@/hooks/user/use.viewer";
import { AvatarSkeleton, UserAvatar } from "./avatar";

interface ViewAvatarProps {
    size?: "sm" | "md" | "lg" | "xl";
}
export function ViewerAvatar({ size }: ViewAvatarProps) {
    const { data: viewer, isLoading, isError } = useViewer();

    if (!viewer) {
        return <AvatarSkeleton size={size || "md"} />;
    }

    return (
        <UserAvatar
            user={viewer}
            size={size || "md"}
            className="hover:cursor-pointer"
        />
    );
}
