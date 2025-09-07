import { Criteria } from '@/pages/Criteria/data/schema'; // Pastikan path ini benar

import { useSubCriterias } from '../context/SubCriteriaContext'
import { SubCriteriaDialogAction } from './SubCriteriaDialogAction'
import { SubCriteriaDialogDelete } from './SubCriteriaDialogDelete'

// interface Props untuk menerima 'criterias' (plural, array)
interface Props {
    criterias: Criteria[];
}

// 'criterias' sebagai prop di sini
export function SubCriteriaDialog({ criterias }: Props) {
    const { open, setOpen, currentRow, setCurrentRow } = useSubCriterias()

    const handleClose = () => {
        setOpen(null)
        setCurrentRow(null)
    }

    return (
        <>
            <SubCriteriaDialogAction
                key='subcriteria-add'
                // Teruskan 'criterias' ke dialog aksi
                criterias={criterias}
                open={open === 'add'}
                onOpenChange={(isOpen) => !isOpen && handleClose()}
            />

            {currentRow && (
                <>
                    <SubCriteriaDialogAction
                        key={`subcritria-edit-${currentRow.id}`}
                        // Teruskan 'criterias' juga ke mode edit
                        criterias={criterias}
                        open={open === 'edit'}
                        onOpenChange={(isOpen) => !isOpen && handleClose()}
                        currentRow={currentRow}
                    />

                    <SubCriteriaDialogDelete
                        key={`subcriteria-delete-${currentRow.id}`}
                        open={open === 'delete'}
                        onOpenChange={(isOpen) => !isOpen && handleClose()}
                        currentRow={currentRow}
                    />
                </>
            )}
        </>
    )
}
