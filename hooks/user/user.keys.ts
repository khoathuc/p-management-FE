export const userQueryKeys = {
    all: ["users"],
    viewer: ["viewer"],
    details: () => [...userQueryKeys.all, "detail"],
    detail: (id: string) => [...userQueryKeys.details(), id],
    pagination: (page: number) => [...userQueryKeys.all, "pagination", page],
    infinite: () => [...userQueryKeys.all, "infinite"],
};
