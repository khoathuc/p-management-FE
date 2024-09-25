import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import HeadContent from "./head-content";
import TitleContent from "./title-content";
import { rest } from "@/lib/rest";

const WorkspaceDetails = () => {
    const [workspaceAvatar, setWorkspaceAvatar] = useState<string>();
    const [workspaceName, setWorkspaceName] = useState('');

    interface Workspace {
        userId: "string",
        name: "string",
        logo: "string",
        members: [
            "string"
        ],
        owners: [
            "string"
        ],
        admins: [
            "string"
        ]
    }

    useEffect(() => {
        let response: any;
        rest.get<Workspace[]>('/workspaces')
            .then((res: { data: any; }) => {
                // console.log(res.data.data);
                response = res.data.data[0];
                setWorkspaceAvatar(response.logo);
                setWorkspaceName(response.name);
            })
            .catch((error: any) => {
                console.error(error);
            });
        // console.log(response);
        // setWorkspaceAvatar(response.logo);
    }, []);
    return (
        <div>

            <HeadContent label="Details" />
            <div className="flex flex-col gap-4">
                <TitleContent
                    title="Avatar"
                    subtitle="Change workspace's avatar"
                >
                    <></>
                </TitleContent>
                <div className="flex items-center flex-col gap-3">
                    <img src={workspaceAvatar} alt="" className="size-40 rounded-xl" />
                    <label htmlFor="avatar" className="cursor-pointer flex flex-col items-center text-sm">
                        Choose Image
                        <Input id="avatar" type="file" className="w-64 mb-4 h-10" />
                    </label>
                </div>

                <TitleContent
                    title="Name"
                    subtitle={
                        // user?.emailAddresses[0]?.emailAddress
                        "Change the name of the workspace."
                    }
                >
                    <Input className="w-96 mr-1 h-10" placeholder={workspaceName} />
                </TitleContent>

            </div>
        </div>
    );
}

export default WorkspaceDetails;