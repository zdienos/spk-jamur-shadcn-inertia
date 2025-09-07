import { useCriterias } from '../context/criteria-context'
import { CriteriasActionDialog } from './criterias-action-dialog'
import { CriteriasDeleteDialog } from './criterias-delete-dialog'
// import { UsersInviteDialog } from './users-invite-dialog'

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
                            }, 500)
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
                            }, 500)
                        }}
                        currentRow={currentRow}
                    />
                </>
            )}
        </>
    )
}
