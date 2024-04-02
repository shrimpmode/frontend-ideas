import {TopBar} from "@/app/slack-app/components/top-bar";
import {Sidebar} from "@/app/slack-app/components/sidebar-section/sidebar";
import {ChatSection} from "@/app/slack-app/components/chat-section/chat-section";

export const AppWindow = () => {
    return (
        <div className="w-[800px] h-[500px] border-2 border-black bg-yellow-50 rounded-lg flex flex-col resize overflow-auto">
            <TopBar />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <ChatSection />
            </div>
        </div>
    )
}