import {Settings, Star} from "lucide-react";
import {Button} from "@/components/ui/button";

export const ChatBar = () => {

    return (
        <div className='border-0 border-b-2 border-black h-[42px] flex justify-between items-center px-4 py-2'>
                <div className='font-semibold'>
                    # random
                </div>

                <div className='font-semibold flex gap-2'>
                    <Button className='hover:bg-yellow-50 font-semibold' variant='ghost'>
                        Members: [8]
                    </Button>
                    <Button className='hover:bg-yellow-50 px-0' variant='ghost'>
                    <Settings />
                    </Button>
                    <Button variant='ghost' className='hover:bg-yellow-50 px-0'>
                    <Star />
                    </Button>
                </div>
        </div>
    )
}