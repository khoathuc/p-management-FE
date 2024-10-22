import z, { ZodString } from "zod";

const maxLengthPolicies = {
    password: 128,
    username: 255,
    email: 255,
    first_name: 128,
    last_name: 128,
};

const minLengthPolicies = {
    password: 8,
};

export const passwordRegisterSchema: ZodString = z
    .string()
    .min(minLengthPolicies.password, "Password is too short!")
    .max(maxLengthPolicies.password, "Password is too long!")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character");

export const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password required"),
});

export const registerSchema = z
    .object({
        email: z.string().email("Invalid email"),
        username: z
            .string()
            .min(1, "Username is required")
            .max(maxLengthPolicies.username, "Username is too long"),
        password: passwordRegisterSchema,
        confirm_password: z.string(),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Confirm password don't match",
        path: ["confirm_password"],
    });

export const ResendEmailSchema = z.object({
    email: z.string().email("Invalid email"),
});

export const userProfileSchema = z.object({
    username: z.string().min(1, "Username is required"),
    last_name: z.any(),
    first_name: z.any(),
    job_title: z.any(),
});

export const userChangePasswordSchema = z
    .object({
        curr_password: z.string().min(1, "Current password required"),
        new_password: passwordRegisterSchema,
        confirm_password: z.string(),
    })
    .refine((data) => data.new_password === data.confirm_password, {
        message: "Confirm password don't match",
        path: ["confirm_password"],
    });
