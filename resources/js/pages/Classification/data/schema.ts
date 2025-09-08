import { z } from 'zod'

const classificationSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
})

export type classificationType = z.infer<typeof classificationSchema>

export const classificationListSchema = z.array(classificationSchema)
