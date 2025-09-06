import { z } from 'zod'

// const userStatusSchema = z.union([
//     z.literal('active'),
//     z.literal('inactive'),
//     z.literal('invited'),
//     z.literal('suspended'),
// ])
// export type UserStatus = z.infer<typeof userStatusSchema>

// const userRoleSchema = z.union([
//     z.literal('superadmin'),
//     z.literal('admin'),
//     z.literal('cashier'),
//     z.literal('manager'),
// ])

const criteriaSchema = z.object({
    id: z.number(),
    nama: z.string(),
})

export type Criteria = z.infer<typeof criteriaSchema>

export const criteriaListSchema = z.array(criteriaSchema)
