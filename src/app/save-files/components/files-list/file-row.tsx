import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export const FileRow = () => {

    return (
        <div className="flex items-center">
            <div className="flex basis-[300px]">
                <div> Icon</div>
                <div>C programming language</div>
            </div>
            <div className="basis-[140px]">
                10 mar 2023
            </div>
            <div>
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CS</AvatarFallback>
                </Avatar>
            </div>

            <div>
                1 Kb
            </div>
        </div>
    )
}