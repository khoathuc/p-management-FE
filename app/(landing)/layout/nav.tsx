import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { getServerSession } from "next-auth";
import { AppLogo } from "@/components/uikit/app/app";
import { NavViewerAvatar } from "../components/nav.viewer.avatar";

export default async function Nav() {
    const session = await getServerSession();

    return (
        <nav className="py-5">
            <div className="container flex justify-between items-center">
                <AppLogo size={44} />

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
                        <NavViewerAvatar />
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
