import {TeamSelector} from "@/app/slack-app/components/sidebar-section/team-selector";
import {ThreadsButton} from "@/app/slack-app/components/sidebar-section/threads-button";
import {SquareMinus, User, Folder} from "lucide-react";
import {Button} from "@/components/ui/button";

export const SidebarMenu = () => {
    return (
        <div className='p-3 flex flex-col gap-2 border-0 border-r-2 border-black flex-1'>
            <TeamSelector />
            <ThreadsButton />
            <div className=''>
                <Button variant='ghost' className='flex gap-2 px-0 hover:bg-0'>
                    <SquareMinus />
                    <Folder />
                    <div className='font-semibold'>Channels</div>
                </Button>
                <div className='pl-8'>
                    <div>
                        # general
                    </div>
                    <div>
                        # random
                    </div>
                </div>
            </div>

            <div className=''>
                <Button variant='ghost' className='flex gap-2 px-0 hover:bg-0'>
                    <SquareMinus />
                    <User />
                    <div className='font-semibold'>Direct Messages</div>
                </Button>
                <div className='pl-8'>
                    <div>
                        # general
                    </div>
                    <div>
                        # general
                    </div>
                </div>
            </div>
        </div>
    )
}