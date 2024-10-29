import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface RowDefType {
    label: string;
    children?: React.ReactNode;
    compact?: Boolean;
}

export function RowDef(props: RowDefType) {
  const {label, children, compact} = props

  return <div className={cn("flex gap-1", {"flex-col": !compact})}>
    <Label>{label}</Label>
    <div>{children}</div>
  </div>
}
