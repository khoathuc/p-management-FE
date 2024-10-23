import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import Word from "@/lib/word";
import { User } from "@/types/user";

interface UserAvatarProps {
    user: User;
    size?: "sm" | "md" | "lg";
    className?: string;
}

// Set size classes based on the size prop
const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-8 h-8",
};

//TODO: add random color on fallback
export function UserAvatar({ user, className, size }: UserAvatarProps) {
    return (
        <Avatar className={cn(sizeClasses[size || "md"], className)}>
            {user.avatar && (
                <AvatarImage src={user.avatar} alt={user.username} />
            )}
            <AvatarFallback className="bg-blue-400">
                {Word.abbreviateString(user.username)}
            </AvatarFallback>
        </Avatar>
    );
}

interface AvatarSkeletonProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function AvatarSkeleton({ className, size }: AvatarSkeletonProps) {
    return (
        <Skeleton
            className={cn("rounded-full", sizeClasses[size || "md"], className)}
        />
    );
}
