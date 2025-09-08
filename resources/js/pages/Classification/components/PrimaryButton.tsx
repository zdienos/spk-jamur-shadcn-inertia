import { IconPlus } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

import { useClassification } from '../context/Context'

export function ClassificationPrimaryButton() {
    const { setOpen } = useClassification()
    return (
        <div className='flex gap-2'>
            {/* <Button
                variant='outline'
                className='space-x-1'
                onClick={() => setOpen('invite')}
            >
                <span>Invite User</span> <IconMailPlus size={18} />
            </Button> */}
            <Button
                // className='space-x-1'
                // size="sm"
                className="flex items-center gap-2"
                onClick={() => setOpen('add')}
            >
                <IconPlus className="h-4 w-4" />
                Klasifikasi
            </Button>
        </div>
    )
}
