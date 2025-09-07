import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    useContext,
    useState
} from 'react'

import useDialogState from '@/hooks/use-dialog-state'

import { Criteria } from '../data/schema'

type CriteriasDialogType = 'add' | 'edit' | 'delete'

interface CriteriasContextType {
    open: CriteriasDialogType | null
    setOpen: (str: CriteriasDialogType | null) => void
    currentRow: Criteria | null
    // Hilangkan prefix 'React.'
    setCurrentRow: Dispatch<SetStateAction<Criteria | null>>
}

// Panggil 'createContext' secara langsung
const CriteriasContext = createContext<CriteriasContextType | null>(null)

interface Props {
    // Hilangkan prefix 'React.'
    children: ReactNode
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

export const useCriterias = () => {
    const criteriasContext = useContext(CriteriasContext)

    if (!criteriasContext) {
        throw new Error('useCriteria has to be used within <CriteriaContext>')
    }

    return criteriasContext
}
