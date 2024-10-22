import { ReactNode } from "react";

export default async function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            {children}
        </div>
    );
}
