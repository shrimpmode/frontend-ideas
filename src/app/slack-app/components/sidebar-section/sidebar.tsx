import {SidebarActions} from "@/app/slack-app/components/sidebar-section/sidebar-actions";
import {SidebarMenu} from "@/app/slack-app/components/sidebar-section/sidebar-menu";

export const Sidebar = () => {
    return (
        <div className='flex flex-col'>
            <SidebarActions />
            <SidebarMenu />
        </div>
    )
}