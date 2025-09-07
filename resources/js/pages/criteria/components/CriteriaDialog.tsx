import { useCriterias } from '../context/CriteriaContext'
import { CriteriasActionDialog } from './CriteriaDialogAction'
import { CriteriasDeleteDialog } from './CriteriaDialogDelete'

export function CriteriasDialogs() {
    const { open, setOpen, currentRow, setCurrentRow } = useCriterias()
    return (
        <>
            <CriteriasActionDialog
                key='criteria-add'
                open={open === 'add'}
                onOpenChange={() => setOpen('add')}
            />

            {currentRow && (
                <>
                    <CriteriasActionDialog
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

                    <CriteriasDeleteDialog
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
