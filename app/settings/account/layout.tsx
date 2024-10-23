import { SidebarProvider } from "@/components/ui/sidebar";
import SettingAccountSidebar from "./components/sidebar";

export default function AccountSettingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <SettingAccountSidebar />
            {children}
        </SidebarProvider>
    );
}
