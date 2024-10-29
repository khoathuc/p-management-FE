import { cn } from "@/lib/utils";
export function BaseSide({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return <div className={cn("absolute", className)}>{children}</div>;
}
