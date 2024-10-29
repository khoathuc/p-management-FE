import z from "zod";

export const personalInformationSchema = z.object({
	username: z.string().min(1, "Empty username"),
	firstName: z.any(),
	lastName: z.any(),
	title: z.any(),
	location: z.any()
})