"use client";
import SettingSection from "@/app/settings/components/section";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icon";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { BaseSide } from "@/components/uikit/base/side";
import { ViewerAvatar } from "@/components/uikit/user/viewer";
import { useViewer } from "@/hooks/user/use.viewer";
import { EditPersonalInformationForm } from "../forms/personal.info.form";

export function PersonalInfoSection() {
    const { data: viewer, isLoading, isError } = useViewer();

    if (!viewer) {
        return <PersonalInfoSectionSkeleton />;
    }

    return (
        <SettingSection label="Personal information">
            <BaseSide className="top-4 right-4">
                <EditPersonalInformationForm viewer={viewer} />
            </BaseSide>
            <div className="flex px-8">
                <div className="flex flex-col gap-2 items-center mx-16">
                    <ViewerAvatar size="xl" />
                    <div className="rounded-xl bg-green-200 uppercase text-xs font-bold text-success px-3 h-8 flex items-center">
                        <div className="rounded-full h-2 w-2 bg-success mr-2"></div>
                        {viewer.status}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <div className="">
                                <Label>Username</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.username}
                                </p>
                            </div>
                            <div className="">
                                <Label>Email</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="">
                                <Label>Firstname</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.firstName || "-------"}
                                </p>
                            </div>
                            <div className="">
                                <Label>Lastname</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.lastName || "-------"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <div className="">
                                <Label>Title</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.title || "------"}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="">
                                <Label>Location</Label>
                                <p className="text-gray-500 text-xs">
                                    {viewer.location || "------"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SettingSection>
    );
}

function PersonalInfoSectionSkeleton() {
    return (
        <SettingSection>
            <div className="flex gap-8 items-center">
                <Skeleton className="rounded-full w-24 h-24 mx-16" />

                <div className="flex-1 flex flex-col gap-2">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-full" />
                </div>
            </div>
        </SettingSection>
    );
}
