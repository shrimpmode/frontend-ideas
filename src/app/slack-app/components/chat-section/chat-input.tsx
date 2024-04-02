import {SendHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button";

export const ChatInput = () => {
    return (
        <div className='border-0 border-t-2 border-black flex relative'>
            <textarea placeholder='Your message' rows={1} className='resize-none w-full h-[52px] py-3 px-10 bg-yellow-50 focus:outline-gray-700' />
            <Button className='resize-none absolute right-4 top-1 p-0' size='sm' variant='ghost'>
                <SendHorizontal />
            </Button>
        </div>
    )
}