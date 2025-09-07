import { IconPlus } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import { useCriterias } from '../context/CriteriaContext'

export function CriteriaPrimaryButton() {
    const { setOpen } = useCriterias()
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
                <span> <IconPlus size={18} /></span> Kriteria
            </Button>
        </div>
    )
}
