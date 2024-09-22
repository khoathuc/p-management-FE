"use client";
import React, { useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "../../lib/validations/auth";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import Link from "next/link";
import { Spinner } from "../spinner";
import { rest } from "@lib/rest";

const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        await rest
            .post("/auth/login", { ...values })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <CardWrapper
            headerLabel="Create your account"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
        >
            <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-2">
                    <Button
                        size={"sm"}
                        className="w-full flex items-center gap-2"
                        variant={"outline"}
                    >
                        <FcGoogle size={18} />
                        Continue with Google
                    </Button>
                    <Button
                        size={"sm"}
                        className="w-full flex items-center gap-2"
                        variant={"outline"}
                    >
                        <FaGithub size={16} />
                        Continue with Github
                    </Button>
                    <Button
                        size={"sm"}
                        className="w-full flex items-center gap-2"
                        variant={"outline"}
                    >
                        <FaKey size={12} />
                        Single Sign-On (SSO)
                    </Button>
                </div>
                <div className="h-[1px] w-full bg-black/10 mt-1"></div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-2"
                    >
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs">
                                            Enter your email address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="user@example.com"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs font-normal" />
                                    </FormItem>
                                )}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs">
                                            Enter your password
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="******"
                                                type="password"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs font-normal" />
                                        <Button
                                            size="sm"
                                            variant="link"
                                            asChild
                                            className="px-0 text-destructive text-xs hover:text-link"
                                        >
                                            <Link href="/auth/reset">
                                                Forgot password?
                                            </Link>
                                        </Button>
                                    </FormItem>
                                )}
                            ></FormField>
                        </div>
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full text-white"
                        >
                            {isPending ? (
                                <>
                                    <Spinner className="mr-2" />
                                </>
                            ) : (
                                "Continue"
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </CardWrapper>
    );
};

export default LoginForm;
