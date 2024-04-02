import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const MessageHeader = () => {
    return (
        <div>
            <div className='flex gap-2 px-4 py-1'>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div>
                    <div className='font-semibold text-neutral-700 text-md'>ken.kaneki</div>
                    <div className='text-xs font-semibold'>{
                        new Date().toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true
                        })

                    }</div>
                </div>
            </div>
        </div>
    )
}