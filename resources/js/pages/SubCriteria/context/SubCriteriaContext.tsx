import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    useContext,
    useState
} from 'react'

import useDialogState from '@/hooks/use-dialog-state'

import { SubCriteria } from '../data/schema'

type SubCriteriasDialogType = 'add' | 'edit' | 'delete'

interface SubCriteriasContextType {
    open: SubCriteriasDialogType | null
    setOpen: (str: SubCriteriasDialogType | null) => void
    currentRow: SubCriteria | null
    setCurrentRow: Dispatch<SetStateAction<SubCriteria | null>>
}

const SubCriteriasContext = createContext<SubCriteriasContextType | null>(null)

interface Props {
    children: ReactNode
}

export default function SubCriteriasProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<SubCriteriasDialogType>(null)
    const [currentRow, setCurrentRow] = useState<SubCriteria | null>(null)

    return (
        <SubCriteriasContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
            {children}
        </SubCriteriasContext.Provider>
    )
}

export const useSubCriterias = () => {
    const context = useContext(SubCriteriasContext)
    if (!context) {
        throw new Error('useSubCriterias must be used within a SubCriteriasProvider')
    }
    return context
}
