"use client";
import { rest } from "@/lib/rest";
import { createContext, ReactNode, useContext } from "react";
import useSWR from "swr";

export enum UserStatus {
    Active,
    Deactivated,
}

export enum WorkspaceRole {
    Member,
    Owner,
    Admin,
}

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    status: UserStatus;
    currentWorkspaceId: string;
    title: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
};

type CurrentUser = User & {
    role: WorkspaceRole;
    isLoading: boolean;
};

export const UserContext = createContext<CurrentUser | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const fetcher = (url: string) =>
        rest.get(url).then((res) => {
            return res.data;
        });

    const { data, error, isLoading } = useSWR("/users/me", fetcher);

    return (
        <UserContext.Provider value={{ ...data, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
