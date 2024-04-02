import {MessageSquareText} from "lucide-react";
import {Button} from "@/components/ui/button";

export const ThreadsButton = () => {
    return (
        <div>
             <Button className='font-semibold p-0 flex gap-2 items-center hover:bg-0' variant='ghost'>
                 <MessageSquareText />
                 Threads
        </Button>
        </div>
    )
}