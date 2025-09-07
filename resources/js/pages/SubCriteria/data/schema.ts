import { z } from 'zod'

export const subCriteriaSchema = z.object({
    id: z.number(),
    name: z.string(),
    value: z.number(),
    criteria_id: z.number(),
})
// const subCriteriaSchema = z.object({
//     name: z.string().min(1, { message: 'Nama sub kriteria wajib.' }),
//     value: z.coerce.number().min(1, { message: 'Nilai wajib diisi.' }),
//     criteria_id: z.string().min(1, { message: 'Kriteria induk wajib dipilih.' }),
// });

export type SubCriteria = z.infer<typeof subCriteriaSchema>

export const subCriteriaListSchema = z.array(subCriteriaSchema)
