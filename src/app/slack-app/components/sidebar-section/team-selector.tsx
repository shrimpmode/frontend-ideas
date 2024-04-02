import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export const TeamSelector = () => {
    return (
            <Select >
                <SelectTrigger className="w-[180px] bg-yellow-50 border-black border-2" value='myteam'>
                    <SelectValue defaultValue='myteam' placeholder="Select a team" className='border-2 border-black bg-yellow-50' />
                </SelectTrigger>
                <SelectContent className='bg-yellow-50'>
                    <SelectGroup className='bg-yellow-50 outline-0' defaultValue='myteam'>
                        <SelectLabel>Teams</SelectLabel>
                        <SelectItem value="myteam">My Team</SelectItem>
                        <SelectItem value="teamspirit">Team spirit</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
    )
}