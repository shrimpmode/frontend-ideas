import {ChatBar} from "@/app/slack-app/components/chat-section/chat-bar";
import {Chat} from "@/app/slack-app/components/chat-section/chat";
import {ChatInput} from "@/app/slack-app/components/chat-section/chat-input";

export const ChatSection = () => {
    return (
        <div className='flex flex-col flex-1'>
            <ChatBar />
            <Chat />
            <ChatInput />
        </div>
    )
}