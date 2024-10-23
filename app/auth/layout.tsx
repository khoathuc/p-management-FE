import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }
    
    return (
        <div className="bg-secondary flex h-screen w-full items-center justify-center">
            {children}
        </div>
    );
}
