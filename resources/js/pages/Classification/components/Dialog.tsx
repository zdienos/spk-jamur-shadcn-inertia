import { useClassification } from '../context/Context'
// import { Classification } from '../data/schema'; // Pastikan path ini benar
import { ClassificationDialogAction } from './DialogAction'
import { ClassificationDialogDelete } from './DialogDelete'

// interface Props untuk menerima 'classifications' (plural, array)
// interface Props {
// classifications: Classification[];
// }

// 'classifications' sebagai prop di sini
// export function ClassificationDialog({ classifications }: Props) {
export function ClassificationDialog() {
    const { open, setOpen, currentRow, setCurrentRow } = useClassification()

    const handleClose = () => {
        setOpen(null)
        setCurrentRow(null)
    }

    return (
        <>
            <ClassificationDialogAction
                key='subcriteria-add'
                // Teruskan 'classifications' ke dialog aksi
                // classifications={classifications}
                open={open === 'add'}
                onOpenChange={(isOpen) => !isOpen && handleClose()}
            />

            {currentRow && (
                <>
                    <ClassificationDialogAction
                        key={`subcritria-edit-${currentRow.id}`}
                        // Teruskan 'classifications' juga ke mode edit
                        // classifications={classifications}
                        open={open === 'edit'}
                        onOpenChange={(isOpen) => !isOpen && handleClose()}
                        currentRow={currentRow}
                    />

                    <ClassificationDialogDelete
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
