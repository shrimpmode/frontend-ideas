import { Mail, Plus, FolderPlus, UserRoundPlus } from "lucide-react"
import {Button} from "@/components/ui/button";

export const SidebarActions = () => {
    return (
        <div className='border-0 border-b-2 border-r-2 border-black flex px-2'>
            <Button size='icon' variant='ghost' className='hover:bg-yellow-50'>
                <Plus className='w-[18px]' />
            </Button>
            <Button size='icon' variant='ghost' className='hover:bg-yellow-50'>
            <FolderPlus className='w-[18px]' />
            </Button>
            <Button size='icon' variant='ghost' className='hover:bg-yellow-50'>
            <UserRoundPlus className='w-[18px]' />
            </Button>
            <Button size='icon' variant='ghost' className='hover:bg-yellow-50'>
            <Mail className='w-[18px]'/>
            </Button>
        </div>
    )
}