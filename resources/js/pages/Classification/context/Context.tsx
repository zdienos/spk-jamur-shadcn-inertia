import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
    useContext,
    useState
} from 'react'

import useDialogState from '@/hooks/use-dialog-state'

import { Classification } from '../data/schema'

type ClassificationDialogType = 'add' | 'edit' | 'delete'

interface ClassificationContextType {
    open: ClassificationDialogType | null
    setOpen: (str: ClassificationDialogType | null) => void
    currentRow: Classification | null
    // Hilangkan prefix 'React.'
    setCurrentRow: Dispatch<SetStateAction<Classification | null>>
}

// Panggil 'createContext' secara langsung
const ClassificationContext = createContext<ClassificationContextType | null>(null)

interface Props {
    // Hilangkan prefix 'React.'
    children: ReactNode
}

export default function CriteriasProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<ClassificationDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Classification | null>(null)

    return (
        <ClassificationContext.Provider value={{ open, setOpen, currentRow, setCurrentRow }}>
            {children}
        </ClassificationContext.Provider>
    )
}

export const useClassification = () => {
    const classificationContext = useContext(ClassificationContext)

    if (!classificationContext) {
        throw new Error('useClassification has to be used within <ClasificationContext>')
    }

    return classificationContext
}
