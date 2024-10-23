import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import app from "@/lib/app";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getServerSession } from "next-auth";
import ViewerAvatar from "@/components/uikit/user/viewer.avatar";

export default async function Nav() {
    const session = await getServerSession();

    return (
        <nav className="py-5">
            <div className="container flex justify-between items-center">
                <Link href="/" className="hover:bg-secondary">
                    <Image
                        src={app.logoUrl}
                        alt="app_logo"
                        width={44}
                        height={44}
                    />
                </Link>

                <NavigationMenu className="flex gap-6">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/products" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Products
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/about-us" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div>
                    {session ? (
                        <ViewerAvatar />
                    ) : (
                        <div className="flex gap-3">
                            <Button variant="outline" asChild>
                                <Link href="/auth/sign-up">Sign Up</Link>
                            </Button>
                            <Button variant="default" asChild>
                                <Link href="/auth/sign-in">Sign In</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
