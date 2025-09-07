import { IconPlus } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import { useSubCriterias } from '../context/SubCriteriaContext'

export function SubCriteriaPrimaryButtons() {
    const { setOpen } = useSubCriterias()
    return (
        <div className='flex gap-2'>
            {/* <Button
                variant='outline'
                className='space-x-1'
                onClick={() => setOpen('invite')}
            >
                <span>Invite User</span> <IconMailPlus size={18} />
            </Button> */}
            <Button className='space-x-1' onClick={() => setOpen('add')}>
                <span> <IconPlus size={18} /></span> Sub Kriteria
            </Button>
        </div>
    )
}
