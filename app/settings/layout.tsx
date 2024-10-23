import { MasterLayout } from "@/components/uikit/layout/master";

export default function SettingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MasterLayout>{children}</MasterLayout>;
}
