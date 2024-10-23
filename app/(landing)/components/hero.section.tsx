import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/ui/icon";

export default function HeroSection() {
    return (
        <div className="w-full flex items-center gap-12 pt-12 my-auto">
            <div className="flex flex-col my-auto flex-1">
                <h1 className="text-4xl font-extrabold mt-2">
                    Welcome to XYZ <br />
                    Let's rock
                </h1>
                <p className="text-lg text-slate-700 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    quaerat debitis ratione libero aperiam culpa molestiae
                    consectetur. Iure fugit necessitatibus consequuntur sunt,
                    mollitia nesciunt ex? Iste corporis voluptatibus
                    consequuntur impedit.
                </p>
                <div className="flex gap-3 mt-6">
                    <Button asChild variant="default">
                        <Link href="/products">
                            Get started
                            <Icons.move_right size={16} />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex-1">
                <Image
                    src="landing/team.svg"
                    alt="hero_img"
                    width={560}
                    height={560}
                />
            </div>
        </div>
    );
}
