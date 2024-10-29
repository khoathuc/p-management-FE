import SettingPageLayout from "../../components/page.layout";
import { PersonalInfoSection } from "./components/personal.section";

export default function SettingAccountInfo() {
    return (
        <SettingPageLayout>
            <div className="flex flex-col gap-4">
                <PersonalInfoSection />
            </div>
        </SettingPageLayout>
    );
}
