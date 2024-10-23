import { Icons } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export default function BaseSpinner({ className }: { className?: string }) {
    return (
        <Icons.loader className={cn("mr-2 h-4 w-4 animate-spin", className)} />
    );
}