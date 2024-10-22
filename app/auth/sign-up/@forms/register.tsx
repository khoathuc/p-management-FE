"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../validations/auth";
import z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<Boolean>(false);

    const onSubmit = async (data: RegisterFormData) => {};

    return (
        <Card className="mx-auto min-w-80 max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription>Sign up to join us</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="flex items-end">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter email"
                                                {...field}
                                                type="text"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="flex items-end">
                                            Username
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter username"
                                                {...field}
                                                type="text"
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="flex justify-between items-end">
                                            Password
                                            <Button
                                                variant="icon"
                                                size="icon"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowPassword(
                                                        !showPassword
                                                    );
                                                }}
                                            >
                                                {showPassword ? (
                                                    <Icons.eye size={16} />
                                                ) : (
                                                    <Icons.eye_off size={16} />
                                                )}
                                            </Button>
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Enter your password"
                                                {...field}
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <FormField
                            control={form.control}
                            name="confirm_password"
                            defaultValue=""
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel className="flex justify-between items-end">
                                            Confirm password
                                            <Button
                                                variant="icon"
                                                size="icon"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowConfirmPassword(
                                                        !showConfirmPassword
                                                    );
                                                }}
                                            >
                                                {showConfirmPassword ? (
                                                    <Icons.eye size={20} />
                                                ) : (
                                                    <Icons.eye_off size={20} />
                                                )}
                                            </Button>
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                placeholder="Enter confirm password"
                                                {...field}
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />
                        <Button className="w-full" type="submit">Sign Up</Button>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="auth/sign-in" className="underline">
                        Sign In
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
