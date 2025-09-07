import { useCriterias } from '../context/CriteriaContext'
import { CriteriaDialogAction } from './CriteriaDialogAction'
import { CriteriaDialogDelete } from './CriteriaDialogDelete'

export function CriteriaDialog() {
    const { open, setOpen, currentRow, setCurrentRow } = useCriterias()
    return (
        <>
            <CriteriaDialogAction
                key='criteria-add'
                open={open === 'add'}
                onOpenChange={() => setOpen('add')}
            />

            {currentRow && (
                <>
                    <CriteriaDialogAction
                        key={`critria-edit-${currentRow.id}`}
                        open={open === 'edit'}
                        onOpenChange={() => {
                            setOpen('edit')
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 300)
                        }}
                        currentRow={currentRow}
                    />

                    <CriteriaDialogDelete
                        key={`criteria-delete-${currentRow.id}`}
                        open={open === 'delete'}
                        onOpenChange={() => {
                            setOpen('delete')
                            setTimeout(() => {
                                setCurrentRow(null)
                            }, 300)
                        }}
                        currentRow={currentRow}
                    />
                </>
            )}
        </>
    )
}
