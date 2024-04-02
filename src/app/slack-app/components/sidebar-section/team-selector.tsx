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
        <div>
            <Select >
                <SelectTrigger className="w-[180px] bg-yellow-50 border-black border-2">
                    <SelectValue placeholder="Select a fruit" className='border-2 border-black bg-yellow-50' />
                </SelectTrigger>
                <SelectContent className='bg-yellow-50'>
                    <SelectGroup className='bg-yellow-50 outline-0'>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}