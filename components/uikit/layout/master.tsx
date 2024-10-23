import { ReactNode } from "react";
import { SuperHeader } from "./super.header";

interface MasterLayoutProps {
    children: ReactNode;
}

export function MasterLayout({ children }: MasterLayoutProps) {
    return (
        <div className="flex flex-col">
            <SuperHeader />
        </div>
    );
}
