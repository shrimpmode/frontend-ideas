import {MessageHeader} from "@/app/slack-app/components/message-section/message-header";
import {MessageContent} from "@/app/slack-app/components/message-section/message-content";

export const Message = () => {
    return (
        <div className='flex flex-col flex-1 p-2'>
          <MessageHeader />
            <MessageContent/>
        </div>
    )
}