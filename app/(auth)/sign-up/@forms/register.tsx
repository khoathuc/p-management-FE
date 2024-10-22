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
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/icon";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<Boolean>(false);

    return (
        <Card className="mx-auto min-w-80 max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription>Sign up to join us</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Button
                                variant="icon"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                }}
                            >
                                {showPassword ? (
                                    <Icons.eye size={20} />
                                ) : (
                                    <Icons.eye_off size={20} />
                                )}
                            </Button>
                        </div>
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="confirmPassword">
                                Confirm password
                            </Label>
                            <Button
                                variant="icon"
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
                        </div>
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="sign-in" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
