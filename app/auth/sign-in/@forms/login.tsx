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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../../validations/auth";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async () => {
        const values = form.getValues();

        try {
            const res = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
            });

            if (!res || res.error) {
                toast({
                    variant: "destructive",
                    description: res?.error || "db-error",
                    action: (
                        <ToastAction altText="Try again">Try again</ToastAction>
                    ),
                });
            } else {
                router.push("/");
            }
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Unknown error",
                action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                ),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="mx-auto min-w-80 max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email"
                                                {...field}
                                                type="text"
                                            ></Input>
                                        </FormControl>
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
                                        <FormLabel className="flex">
                                            Password
                                            <Link
                                                href="/forgot-password"
                                                className="ml-auto underline"
                                            >
                                                Forgot your password?
                                            </Link>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your password"
                                                {...field}
                                                type="password"
                                            ></Input>
                                        </FormControl>
                                    </FormItem>
                                );
                            }}
                        />
                        <Button className="w-full" type="submit">
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="auth/sign-up" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
