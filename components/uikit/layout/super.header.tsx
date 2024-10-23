import { Input } from "@/components/ui/input";
import { AppLogo } from "../app/app";
import { Icons } from "@/components/ui/icon";
import ViewerAvatar from "../user/viewer.avatar";

export function SuperHeader() {
    return (
        <div className="w-full min-h-12 max-h-12 pl-12 pr-2 py-2 flex justify-between items-center border-b border-b-border">
            <AppLogo size={24} />
            <div className="flex gap-4 items-center text-secondary-foreground">
                <Input placeholder="Search anything"/>
                <Icons.noti size={22} />
                <Icons.circle_help size={22} />
                <ViewerAvatar size="md"/>
            </div>
        </div>
    );
}
