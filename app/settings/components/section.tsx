import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface SettingSectionProps {
    label?: string;
    children: React.ReactNode;
}

export default function SettingSection({
    label,
    children,
}: SettingSectionProps) {
    return (
        <div className="relative p-4 bg-background rounded-sm border shadow-sm">
            {label && <div>
                <Label className="text-lg font-medium">{label}</Label>
                <Separator className="my-4"/></div>}
            {children}
        </div>
    );
}
