import {Message} from "@/app/slack-app/components/message-section/message";

const messages = Array.from(
    {length: 14},
    (_, i) => ({
    id: i,
    text: `message ${i}`
}))

export const MessageList = () => {
    return (
        <>
            {
                messages.map(message => (
                    <Message key={message.id} />
                ))
            }
        </>
    )
}