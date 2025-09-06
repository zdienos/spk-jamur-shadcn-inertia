import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Criteria } from '../data/schema'

type CriteriasDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface CriteriasContextType {
    open: CriteriasDialogType | null
    setOpen: (str: CriteriasDialogType | null) => void
    currentRow: Criteria | null
    setCurrentRow: React.Dispatch<React.SetStateAction<Criteria | null>>
}

const CriteriasContext = React.createContext<CriteriasContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function CriteriasProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<CriteriasDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Criteria | null>(null)

    return (
        <CriteriasContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
            {children}
        </CriteriasContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCriterias = () => {
    const criteriasContext = React.useContext(CriteriasContext)

    if (!criteriasContext) {
        throw new Error('useCriteria has to be used within <CriteriaContext>')
    }

    return criteriasContext
}
