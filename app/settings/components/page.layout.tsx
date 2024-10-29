export default function SettingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="w-full p-4 bg-secondary">{children}</div>;
}
