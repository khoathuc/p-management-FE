import Link from "next/link";
import app from "@/lib/app";
import Image from "next/image";

export function AppLogo({ size }: { size: number }) {
    return (
        <Link href="/" className="hover:bg-secondary">
            <Image src={app.logoUrl} alt="app_logo" width={size} height={size} />
        </Link>
    );
}
