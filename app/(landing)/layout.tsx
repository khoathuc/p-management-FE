import Nav from "./layout/nav";

export default async function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen px-32">
            <Nav />
            <div className="body">
                {children}
            </div>
        </div>
    );
}
