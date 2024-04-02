'use client'
import {MessageList} from "@/app/slack-app/components/message-section/message-list";
import {useEffect, useRef} from "react";

export const Chat = () => {

    const endOfMessagesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [])

    return (
        <div className='h-full flex flex-col overflow-auto'>
            <div className='flex-1'>
                <div className='h-full'>
                    <div>
                        <MessageList />
                    </div>
                </div>
            </div>
            <div ref={endOfMessagesRef}></div>
        </div>
    )
}