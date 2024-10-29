"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Icons } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { personalInformationSchema } from "../../validations/account.setting";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { User } from "@/types/user";
import { useState } from "react";
import { useUpdateUserPersonalInfo } from "@/hooks/user/use.viewer";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Label } from "@/components/ui/label";
type PersonalInformationFormData = z.infer<typeof personalInformationSchema>;

export function EditPersonalInformationForm({ viewer }: { viewer: User }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const updatePersonalInformation = useUpdateUserPersonalInfo();
    const form = useForm<PersonalInformationFormData>({
        resolver: zodResolver(personalInformationSchema),
        defaultValues: {
            username: viewer.username || "",
            firstName: viewer.firstName || "",
            lastName: viewer.lastName || "",
            title: viewer.title || "",
            location: viewer.location || "",
        },
    });

    const onSubmit = async (data: PersonalInformationFormData) => {
        setIsLoading(true);
        try {
            await updatePersonalInformation.mutateAsync(data);
            toast({
                variant: "default",
                description: "Updated personal information successfully",
            });
            setOpen(false);
        } catch (error) {
            toast({
                variant: "destructive",
                description: error?.message || "Unknown error",
                action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                ),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">
                    <Icons.pencil size={8} />
                    <p className="text-sm">Edit</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <DialogHeader>
                            <DialogTitle>Edit Personal Information</DialogTitle>
                            <DialogDescription>
                                Make changes to your personal information here.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col py-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="grid grid-cols-4 gap-x-4 items-center">
                                            <Label className="text-right mt-2">
                                                Username
                                            </Label>
                                            <FormControl className="col-span-3">
                                                <Input
                                                    placeholder="Edit username"
                                                    {...field}
                                                    type="text"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage className="col-start-2 col-span-3" />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="grid grid-cols-4 gap-x-4 items-center">
                                            <Label className="text-right mt-2">
                                                First name
                                            </Label>
                                            <FormControl className="col-span-3">
                                                <Input
                                                    placeholder="Edit first name"
                                                    {...field}
                                                    type="text"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage className="col-start-2 col-span-3" />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="grid grid-cols-4 gap-x-4 items-center">
                                            <Label className="text-right mt-2">
                                                Last name
                                            </Label>
                                            <FormControl className="col-span-3">
                                                <Input
                                                    placeholder="Edit last name"
                                                    {...field}
                                                    type="text"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage className="col-start-2 col-span-3" />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="grid grid-cols-4 gap-x-4 items-center">
                                            <Label className="text-right mt-2">
                                                Title
                                            </Label>
                                            <FormControl className="col-span-3">
                                                <Input
                                                    placeholder="Edit title"
                                                    {...field}
                                                    type="text"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage className="col-start-2 col-span-3" />
                                        </FormItem>
                                    );
                                }}
                            />
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => {
                                    return (
                                        <FormItem className="grid grid-cols-4 gap-x-4 items-center">
                                            <Label className="text-right mt-2">
                                                Location
                                            </Label>
                                            <FormControl className="col-span-3">
                                                <Input
                                                    placeholder="Edit location"
                                                    {...field}
                                                    type="text"
                                                ></Input>
                                            </FormControl>
                                            <FormMessage className="col-start-2 col-span-3" />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit" disabled={isLoading}>
                                Save changes
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
