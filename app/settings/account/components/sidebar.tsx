import { Icons } from "@/components/ui/icon";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function SettingAccountSidebar() {
    return (
        <Sidebar className="top-12">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key="info">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=info">
                                        <Icons.home />
                                        Personal Info
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="password">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=password">
                                        <Icons.home />
                                        Password
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="noti">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=noti">
                                        <Icons.home />
                                        Notifications
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="locale">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=locale">
                                        <Icons.home />
                                        Language & region
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="workspaces">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=workspaces">
                                        <Icons.home />
                                        Workspaces
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
