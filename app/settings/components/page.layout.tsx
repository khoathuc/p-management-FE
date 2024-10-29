export default function SettingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="container p-4 bg-secondary">{children}</div>;
}
