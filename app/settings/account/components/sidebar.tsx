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
import { usePathname } from "next/navigation";

export default function SettingAccountSidebar() {
    const { data: viewer, isLoading, isError } = useViewer();
    const pathname = usePathname();
    const pathTail = pathname.split("/").pop();
    const isActive = (key:string)=>{
        return key == pathTail
    }

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
                                <SidebarMenuButton asChild isActive={isActive("info")}>
                                    <Link href="/settings/account">
                                        <Icons.home />
                                        Personal Info
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="password">
                                <SidebarMenuButton asChild isActive={isActive("password")}>
                                    <Link href="/settings/account/password">
                                        <Icons.key />
                                        Password
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="noti">
                                <SidebarMenuButton asChild isActive={isActive("noti")}>
                                    <Link href="/settings/account/noti">
                                        <Icons.message_dot />
                                        Notifications
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem key="locale">
                                <SidebarMenuButton asChild isActive={isActive("locale")}>
                                    <Link href="/settings/account/locale">
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
                                <SidebarMenuButton asChild isActive={isActive("workspaces")}>
                                    <Link href="/settings/account/workspaces">
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
