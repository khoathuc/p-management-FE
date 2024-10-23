"use client";
import { Icons } from "@/components/ui/icon";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ViewerAvatar } from "@/components/uikit/user/viewer";
import { useViewer } from "@/hooks/user/use.viewer";
import Link from "next/link";

export default function SettingAccountSidebar() {
    const { data: viewer, isLoading, isError } = useViewer();

    return (
        <Sidebar className="absolute top-12">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex gap-3 items-center border-b pb-2">
                            <ViewerAvatar />
                            <div>
                                <p className="text-sm">{viewer?.username}</p>
                                <p className="text-xs">{viewer?.email}</p>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>User settings</SidebarGroupLabel>
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
                                        <Icons.key />
                                        Password
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="noti">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=noti">
                                        <Icons.message_dot />
                                        Notifications
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="locale">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=locale">
                                        <Icons.languages />
                                        Language & region
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem key="workspaces">
                                <SidebarMenuButton asChild>
                                    <Link href="/settings/account?tab=workspaces">
                                        <Icons.network />
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
